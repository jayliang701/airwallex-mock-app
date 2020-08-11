import React from 'react';

import { observable } from 'mobx';
import { observer } from 'mobx-react';

import { pageContent } from '../Page';
import InvitationPopup from '../../components/InvitationPopup';
import RequestCompletePopup from '../../components/RequestCompletePopup';
import Button from '../../components/Button';

import RequsetInviteForm from "../../data/RequsetInviteForm";

import styles from './index.scss';

const state = observable({
    isShowInvitationPopup: false,
    isShowRequestCompletePopup: false,

    requestInvite: async (form: RequsetInviteForm) => {
        console.log(form);
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
                <Button className={styles.inviteBtn} onClick={ () => state.isShowInvitationPopup = true }>Request an invite</Button>
            </div>

            <RequestCompletePopup 
                hidden={!state.isShowRequestCompletePopup} 
                onClose={ () => state.isShowRequestCompletePopup = false } 
            />
            <InvitationPopup 
                hidden={!state.isShowInvitationPopup} 
                onClose={ () => state.isShowInvitationPopup = false } 
                onSubmit={ (form: RequsetInviteForm) => state.requestInvite(form) } 
            />
        </div>
    );
}

export default pageContent(observer(Home));
