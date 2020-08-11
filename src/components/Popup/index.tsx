import React from 'react';
import classNames from 'classnames';

import styles from './index.scss';

export type PopupProps = {
    className?:string;
    hidden?:boolean;
    width?:number;
    height?:number;
    onClose?:Function;
    showClose?:boolean;
    title?:Function | string;
}

const Popup: React.StatelessComponent<PopupProps> = ({ 
    className = '', 
    title, 
    hidden = true, 
    width = 0, 
    height = 0,
    onClose, 
    showClose = true, 
    children 
}: React.PropsWithChildren<PopupProps>) => {
    if (hidden) return null;

    const style:any = {};
    if (width > 0) {
        style.width = width;
    }
    if (height > 0) {
        style.height = height;
    }

    return (
        <div className={styles.popup}>
            <div className={styles.popupMask}></div>
            <div className={styles.popupWrapper}>
                <div className={classNames(styles.popupModal, className)} style={style}>
                    {
                        showClose ?
                        <div className={styles.closeBtn} onClick={ () => {
                            if (onClose) {
                                onClose();
                            }
                        } }></div> : 
                        null
                    }
                    { 
                        title ? 
                        (typeof title === 'function' ? title() : <div className={styles.popupTitle}>{title}</div>) : 
                        null 
                    }
                    <div className={styles.popupModalWrapper}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;
