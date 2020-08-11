import React from 'react';
import classNames from 'classnames';

import styles from './index.scss';

export type PopupProps = {
    className?:string;
    hidden?:boolean;
    width?:number;
    height?:number;
}

const Popup: React.StatelessComponent<PopupProps> = ({ 
    className = '', 
    hidden = true, 
    width = 0, 
    height = 0, 
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
                    <div className={styles.popupModalWrapper}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;
