import React, { useState } from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react';
import FormStore from './FormStore';
import FormValidator from './FormValidator';
import IFormControl from './IFormControl';
import IFormSubmitTrigger from './IFormSubmitTrigger';

import styles from './Form.scss';

const checkIsBasicType = (target:any):boolean => {
    let t = typeof target;
    return t === 'string' || t === 'number' || t === 'boolean';
}

const isFormControl = (target: React.ReactNode): boolean => {
    if (target && target['type'] && target['type']['prototype'] && typeof target['type']['prototype']['getFormField'] === 'function') {
        return true;
    }
    return false;
}

const isFormSubmitTrigger = (target: React.ReactNode): boolean => {
    if (target && target['type'] && target['type']['prototype'] && typeof target['type']['prototype']['triggerSubmit'] === 'function') {
        return true;
    }
    return false;
}

const isControlWrapper = (target: React.ReactNode): boolean => {
    if (target && target['type'] === ControlWrapper) {
        return true;
    }
    return false;
}

const wrapFormControls = (children:any, form:Form):Array<React.ReactNode> => {
    if (!(children instanceof Array)) {
        children = [ children ];
    }
    let newChildren:Array<React.ReactNode> = [];
    for (let i = 0; i < children.length; i ++) {
        let child:any = children[i];
        let { props } = child;
        newChildren[i] = child;

        if (!props) continue;

        let newChild:React.ReactNode = null;

        if (props && props.children) {
            let subChildren = props.children;
            if (!checkIsBasicType(subChildren)) {
                let newSubChildren: Array<React.ReactNode> = wrapFormControls(subChildren, form);
                if (newSubChildren !== subChildren) {                    
                    newChild = React.cloneElement(child, { key:i, ...props }, newSubChildren);
                    newChildren[i] = newChild;
                }
                continue;
            }
        }

        if (isFormControl(child)) {
            if (!props.name) continue;
    
            newChild = <ControlWrapper key={i} store={form.store} validator={form.validator} target={child} />;
            newChildren[i] = newChild;
        } 
        
        if (isFormSubmitTrigger(child)) {
            newChild = React.cloneElement(child, { key:i, ...props, onSubmit:() => {
                form.doSumbit();
            } }, props.children);
            newChildren[i] = newChild;
        }

    }
    return newChildren;
}

export type ControlWrapperProps = {
    target: React.ReactElement & IFormControl;
    store: FormStore;
    validator: FormValidator;
}

@observer
class ControlWrapper extends React.Component<ControlWrapperProps> {
    public render():React.ReactNode {
        const { target, store, validator } = this.props;
        const targetProps = target.props || {};
        const { name } = targetProps;
        const { results } = validator;
        const { values } = store;

        const err = results[name] && results[name].err ? results[name].err : null;

        return React.cloneElement(target, { 
            ...targetProps, 
            className: classNames(styles.formControl, targetProps.className),
            value: values[name],
            message: err ? <div className={styles.controlError}>{err}</div> : null,
            onChange: (val:any) => {
                store.setValue(name, val);
                if (err) {
                    //If current state is error, check validation while user input
                    //for better user experience
                    validator.check(name, val, store.getValues());
                }
            },
            onFinish: (val:any) => {
                //check validation when focus out or finish
                store.setValue(name, val);
                validator.check(name, val, store.getValues());
            } });
    }
}

export type FormProps = {
    children?: any;
    className?: string;
    defaultValues?: any;
    validation?: any;
    onFieldChange?: Function;
    onSubmit?: Function;
}

export type FormState = {
    store: FormStore;
    validator: FormValidator;
}

export default class Form extends React.Component<FormProps, FormState> {

    public store:FormStore;

    public validator:FormValidator;

    constructor(props) {
        super(props);
        this.store = new FormStore(props.defaultValues || {});
        this.validator = new FormValidator(props.validation || {});
    }

    UNSAFE_componentWillReceiveProps(newProps) {
        if (newProps.defaultValues && !this.props.defaultValues) {
            this.initStore(newProps.defaultValues);
        }
        if (newProps.validation && !this.props.validation) {
            this.initValidation(newProps.validation);
        }
    }

    private initStore(values):void {
        if (!values) return;
        this.store = new FormStore(values);
    }

    private initValidation(rules):void {
        if (!rules) return;
        this.validator = new FormValidator(rules);
    }

    public doSumbit():void {
        const values = this.store.getValues();
        this.validator.checkAll(values).then((isAllValid) => {
            if (isAllValid && this.props.onSubmit) {
                this.props.onSubmit(values);
            }
        });
    }

    public render():React.ReactNode {
        const { children, className } = this.props;

        const newChildren = wrapFormControls(children, this);
        return (
            <div className={classNames(styles.form, className)}>
                {newChildren}
            </div>
        );
    }
}
