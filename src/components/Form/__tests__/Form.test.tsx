import React from 'react';
import { mount } from 'enzyme';

import {
    Form,
    FormRow,
} from '..';
import Input from '../../Input';
import FormStore from '../FormStore';
import Button from '../../Button';

describe('<Form/>', () => {

    it('defaultValues', () => {
        const wrapper = mount((
            <Form defaultValues={{ fullName:'jay', email:'123@123.com' }}>
                <FormRow>
                    <Input name="fullName" />    
                </FormRow>
                <FormRow>
                    <Input name="email" />    
                </FormRow>
            </Form>
        ))
        expect(wrapper.find('input').at(0).prop('value')).toBe('jay');
        expect(wrapper.find('input').at(1).prop('value')).toBe('123@123.com');
    })

    it('form value change', () => {
        const wrapper = mount((
            <Form defaultValues={{ fullName:'' }}>
                <FormRow>
                    <Input name="fullName" />    
                </FormRow>
            </Form>
        ))

        const form:Form = wrapper.instance() as Form;
        const store:FormStore = form.store;

        const input = wrapper.find('input').at(0);
        const evt = { target: { value: 'jay' } } as React.ChangeEvent<HTMLInputElement>;
        input.simulate('change', evt);

        expect(store.getValue('fullName')).toBe('jay');
    })

    it('form submit', (done) => {
        const mockSubmit = jest.fn((values:any) => {
            expect(values.fullName).toBe('jay');
            done();
        });

        const wrapper = mount((
            <Form defaultValues={{ fullName:'' }} onSubmit={mockSubmit}>
                <FormRow>
                    <Input name="fullName" />    
                </FormRow>
                <FormRow>
                    <Button submit={true}>Submit</Button>
                </FormRow>
            </Form>
        ))

        const input = wrapper.find('input').at(0);
        let evt:React.SyntheticEvent = { target: { value: 'jay' } } as React.ChangeEvent<HTMLInputElement>;
        input.simulate('change', evt);

        const btn = wrapper.find(Button).at(0);
        btn.simulate('click');

    })

    it('form submit but validation fail', (done) => {
        let completeTimer = setTimeout(() => {
            done();
        }, 200);

        const mockSubmit = jest.fn(() => {
            if (completeTimer) clearTimeout(completeTimer);
            done.fail(new Error('not allow to submit'));
        });

        const wrapper = mount((
            <Form 
                defaultValues={{ fullName:'' }} 
                validation={{
                    fullName: { required:true }
                }}
                onSubmit={mockSubmit}>
                <FormRow>
                    <Input name="fullName" />
                </FormRow>
                <FormRow>
                    <Button submit={true}>Submit</Button>
                </FormRow>
            </Form>
        ))

        const btn = wrapper.find(Button).at(0);
        btn.simulate('click');
    })

});