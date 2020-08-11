import React from 'react';

import {
    Form,
    FormRow,
    FormCell,
    ValidationRule,
    ValidationType,
} from '../components/Form';

import Popup from '../components/Popup';
import Input from '../components/Input';
import Button, { ButtonType } from '../components/Button';

import styles from './Test.scss';

const doSubmit = (values:any) => {

}

export default () => {
    return (
        <div className={styles.test}>
            <Popup hidden={false}
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
                        doSubmit(values);
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
        </div>
    );
}
