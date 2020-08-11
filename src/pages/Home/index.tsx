import React from 'react';

import { observable } from 'mobx';
import { observer } from 'mobx-react';

import { pageContent } from '../Page';
import InvitationPopup from '../../components/InvitationPopup';
import RequestCompletePopup from '../../components/RequestCompletePopup';
import Button from '../../components/Button';

import RequsetInviteForm from '../../data/RequsetInviteForm';
import { requestInvite } from '../../service';

import styles from './index.scss';

const state = observable({
    sending: false,
    isShowInvitationPopup: false,
    isShowRequestCompletePopup: false,
    isRequested: false,

    requestInvite: async (form: RequsetInviteForm) => {
        state.sending = true;
        try {
            await requestInvite(form);
            state.sending = false;
            state.isRequested = true;
        } catch (err) {
            console.error(err);
            state.sending = false;
            alert('Networks error. Please retry later.');
            return;
        }
        state.isShowInvitationPopup = false;
        state.isShowRequestCompletePopup = true;
    }
});

const Home: React.StatelessComponent<any> = ({}: any) => {
    return (
        <div className={styles.home}>

            <div className={styles.landing}>
                <div className={styles.slogan}>
                    <div>A better way</div>
                    <div>to enjoy every day.</div>
                </div>
                <div className={styles.subSlogan}>
                    <div>Be the first to know when we launch.</div>
                </div>
                {
                    state.isRequested ?
                    <div className={styles.requestedTip}>Thank you!</div> :
                    <Button className={styles.inviteBtn} onClick={ () => state.isShowInvitationPopup = true }>Request an invite</Button>
                }
            </div>

            <RequestCompletePopup 
                hidden={!state.isShowRequestCompletePopup} 
                onClose={ () => state.isShowRequestCompletePopup = false } 
            />
            <InvitationPopup 
                loading={state.sending}
                hidden={!state.isShowInvitationPopup} 
                onClose={ () => state.isShowInvitationPopup = false } 
                onSubmit={ (form: RequsetInviteForm) => state.requestInvite(form) } 
            />
        </div>
    );
}

export default pageContent(observer(Home));
