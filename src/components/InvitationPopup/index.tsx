import React from 'react';

import {
    Form,
    FormRow,
    ValidationType,
} from '../../components/Form';

import Popup, { PopupProps } from '../../components/Popup';
import Input from '../../components/Input';
import Button, { ButtonType } from '../../components/Button';

export type InvitationPopupProps = {
    onSubmit?:Function;
    onClose?:Function;
} & PopupProps;

const InvitationPopup: React.StatelessComponent<any> = ({ hidden, onSubmit, onClose }) => {
    return (
        <Popup hidden={hidden}
            width={400}>
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
                onSubmit={ (values:any) => {
                    onSubmit(values);
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
                <FormRow>
                    <Button type={ButtonType.Primary}>Send</Button>
                </FormRow>
            </Form>
        </Popup>
    );
}

export default InvitationPopup;
