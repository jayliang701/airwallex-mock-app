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
    className?: string;
    type?: ButtonType;
    onClick?: Function;
    loading?: boolean;
    loadingText?: string;
}

export default class Button extends React.Component<ButtonProps & FormSubmitTriggerProps> implements IFormSubmitTrigger {

    public triggerSubmit():void {
        const { onSubmit } = this.props;
        if (onSubmit) {
            onSubmit();
        }
    }

    private renderLoading():React.ReactNode {
        const { loadingText } = this.props;
        return (
            <div>{loadingText || 'Processing...'}</div>
        );
    }

    public render():React.ReactNode {
        const { children, type, onSubmit, onClick, className, loading } = this.props;
        return (
            <div className={classNames(StyleTypes[type || ButtonType.Default], loading ? styles.btnDisabled : null, className)}
                onClick={ () => {
                    if (onSubmit) {
                        this.triggerSubmit();
                    } else {
                        if (onClick) {
                            onClick();
                        }
                    }
                } }>
                { 
                    loading ? 
                    this.renderLoading() :
                    children
                }
            </div>
        );
    }

}
