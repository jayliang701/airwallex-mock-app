import React from 'react';
import classNames from 'classnames';
import IFormControl from "../Form/IFormControl";
import styles from './index.scss';

export type InputProps = {
    className?: any;
    placeholder?: string;
    name?: string;
    value?: string;
    message?: string | React.ReactNode;
    onFinish?: Function;
    onChange?: Function;
};

class Input extends React.Component<InputProps> implements IFormControl {

    state = {
        message: undefined,
    };

    public getFormField():string | undefined {
        return this.props.name;
    }

    public getFormValue():any {
        return this.props.value;
    }

    public render():React.ReactNode {
        const { className, placeholder, name, value, onChange, onFinish, message } = this.props;
        return (
            <div className={classNames(styles.input, className)} >
                <input 
                    placeholder={placeholder} 
                    name={name} 
                    value={value} 
                    onBlur={ () => {
                        onFinish && onFinish(value);
                    } }
                    onChange={ (evt:React.ChangeEvent<HTMLInputElement>) => {
                        const val:string = evt.target.value;
                        onChange && onChange(val);
                    } } />
                {message}
            </div>
        );
    }
}

export default Input;