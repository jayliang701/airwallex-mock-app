import React from 'react';

import Popup, { PopupProps } from '../Popup';
import Button, { ButtonType } from '../Button';

import styles from './index.scss';

export type RequestCompletePopupProps = {
    
} & PopupProps;

const RequestCompletePopup: React.StatelessComponent<RequestCompletePopupProps> = ({ hidden, onClose }: RequestCompletePopupProps) => {
    return (
        <Popup hidden={hidden}
            title={'All done !'}
            showClose={false}
            width={480}
            height={360}
            onClose={ onClose }>
            <div className={styles.desc}>
                <div>You will be one of the first to experience</div>
                <div>Broccoli & Co. when we launch.</div>
            </div>
            <div className={styles.btn}>
                <Button type={ButtonType.Primary} onClick={ () => {
                    if (onClose) {
                        onClose();
                    }
                } }>OK</Button>
            </div>
        </Popup>
    );
}

export default RequestCompletePopup;
