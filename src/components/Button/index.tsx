import React from 'react';
import classNames from 'classnames';

import IFormSubmitTrigger, { FormSubmitTriggerProps } from "../Form/IFormSubmitTrigger";

import styles from './index.scss';

export enum ButtonType {
    Default = 'default',
    Primary = 'primary',
} 

const StyleTypes = {
    default: styles.btnDefault,
    primary: styles.btnPrimary,
}

export type ButtonProps = {
    type?: ButtonType;
    onClick?: Function;
}

export default class Button extends React.Component<ButtonProps & FormSubmitTriggerProps> implements IFormSubmitTrigger {

    public triggerSubmit():void {
        const { onSubmit } = this.props;
        if (onSubmit) {
            onSubmit();
        }
    }

    public render():React.ReactNode {
        const { children, type, onSubmit, onClick } = this.props;
        return (
            <div className={classNames(StyleTypes[type || ButtonType.Default])}
                onClick={ () => {
                    if (onSubmit) {
                        this.triggerSubmit();
                    } else {
                        if (onClick) {
                            onClick();
                        }
                    }
                } }>
                {children}
            </div>
        );
    }

}
