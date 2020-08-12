import {
    ValidationType,
} from '../DefaultValidationRules';

import FormValidator from '../FormValidator';

describe('FormValidator', () => {

    it('simple check', async () => {
        const validator:FormValidator = new FormValidator({
            email: { rule: ValidationType.Email }
        });
        const values:any = {
            email: '123@123.com'
        };
        await expect(validator.check('email', values.email, values)).resolves.toBe(true);

        values.email = 'abcd';
        await expect(validator.check('email', values.email, values)).resolves.toBe(false);
    })

    it('required check', async () => {
        const validator:FormValidator = new FormValidator({
            email: { rule: ValidationType.Email, required: true }
        });
        const values:any = {
            email: ''
        };
        await expect(validator.check('email', values.email, values)).resolves.toBe(false);
    })

    it('custom regex check', async () => {
        const validator:FormValidator = new FormValidator({
            test: { regex:/[0-9]+/ }
        });
        const values:any = {
            test: 'abc'
        };
        await expect(validator.check('test', values.test, values)).resolves.toBe(false);

        values.test = '0123';
        await expect(validator.check('test', values.test, values)).resolves.toBe(true);
    })

    it('custom async check', async () => {
        const validator:FormValidator = new FormValidator({
            test: { check: (value:any, values:any):Promise<boolean> => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve(value === '123');
                    }, 20);
                });
            } }
        });
        const values:any = {
            test: 'abc'
        };
        await expect(validator.check('test', values.test, values)).resolves.toBe(false);

        values.test = '123';
        await expect(validator.check('test', values.test, values)).resolves.toBe(true);
    })

    it('check all', async () => {
        const validator:FormValidator = new FormValidator({
            email: { rule: ValidationType.Email, required:true },
            confirmEmail: { check: (value:any, values:any):Promise<boolean> => {
                return new Promise(resolve => {
                    resolve(value === values.email);
                });
            } }
        });

        const values:any = {
            email: '123@123.com',
            confirmEmail: '456@123.com'
        };
        await expect(validator.checkAll(values)).resolves.toBe(false);

        values.confirmEmail = '123@123.com';
        await expect(validator.checkAll(values)).resolves.toBe(true);
    })

});