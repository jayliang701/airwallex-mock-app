import React from 'react';

import {
    Form,
    FormRow,
    ValidationType,
} from '../../components/Form';

import Popup, { PopupProps } from '../../components/Popup';
import Input from '../../components/Input';
import Button, { ButtonType } from '../../components/Button';

import RequsetInviteForm from "../../data/RequsetInviteForm";

import styles from './index.scss';

export type InvitationPopupProps = {
    onSubmit?:Function;
} & PopupProps;

const InvitationPopup: React.StatelessComponent<InvitationPopupProps> = ({ hidden, onSubmit, onClose }: InvitationPopupProps) => {
    return (
        <Popup hidden={hidden}
            title={'Request an invite'}
            width={430}
            height={480}
            onClose={ onClose }>
            <Form 
                defaultValues={{
                    fullName: '',
                    email: '',
                    confirmEmail: '',
                }}
                validation={{
                    email: { 
                        rule: ValidationType.Email, 
                        required:true, 
                        message:'Invalid email address', 
                        requiredMessage:'Please input your email address' 
                    }
                }}
                onSubmit={ ({ fullName, email }) => {
                    if (onSubmit) {
                        const form = new RequsetInviteForm(fullName, email);
                        onSubmit(form);
                    }
                } }
            > 
                <FormRow>
                    <Input name="fullName" placeholder="Full Name" />
                </FormRow>
                <FormRow>
                    <Input name="email" placeholder="Email" />
                </FormRow>
                <FormRow>
                    <Input name="confirmEmail" placeholder="Confirm Email" />
                </FormRow>
                <FormRow style={{ marginTop: 48 }}>
                    <Button type={ButtonType.Primary}>Send</Button>
                </FormRow>
            </Form>
        </Popup>
    );
}

export default InvitationPopup;
