/** 
 * FormValidator handles validation for form inputs.
*/
import { observable, action } from 'mobx';
import * as DefaultValidationRules from './DefaultValidationRules';
import FormStore from './FormStore';

export type ValidationRule = {
    regex?:RegExp;
    rule?:DefaultValidationRules.ValidationType;
    check?:Function;
    message?:string;
    required?:boolean;
    requiredMessage?:string;
};

export default class FormValidator {

    rules:any = {};

    @observable results:any = {};

    constructor(definedRules:any) {
        definedRules = definedRules || {};
        this.rules = {...definedRules};
    }

    @action
    public check(name:string, value:any, values:any):Promise<boolean> {
        return new Promise((resolve) => {
            const checker:ValidationRule = this.rules[name] as ValidationRule;
            if (!checker) return resolve(true);

            //check for required
            if (value === null || value === undefined || String(value).trim() === '') {
                if (checker.required) {
                    this.afterCheck(name, value, false, checker.requiredMessage || 'required');
                    resolve(false);
                }
                return;
            }

            if (checker.rule) {
                //use default rules
                let checkFunc = DefaultValidationRules[checker.rule];
                let isValid = checkFunc(value);
                this.afterCheck(name, value, isValid);
                return resolve(isValid);
            } else if (checker.regex) {
                //use custom regex
                let isValid = checker.regex.test(value);
                this.afterCheck(name, value, isValid);
                return resolve(isValid);
            } else if (checker.check) {
                //use custom Promise based function            
                checker.check(value, values).then((isValid:boolean) => {
                    this.afterCheck(name, value, isValid);
                    resolve(isValid);
                }).catch(err => {
                    resolve(false);
                });
            }
        });
    }

    @action
    public checkAll(values:any):Promise<boolean> {
        return new Promise(resolve => {

            let tasks:Array<Promise<boolean>> = [];
            for (let field in this.rules) {
                tasks.push(this.check(field, values[field], values));
            }
            //check all fields
            let hasError:boolean = false;
            Promise.all(
                tasks.map(p => p.then((isValid:boolean) => {
                    if (!isValid) hasError = true;
                }).catch(() => {
                    hasError = true;
                }))
            ).then(() => {
                resolve(hasError ? false : true);
            });
        });
    }

    private afterCheck(name:string, value:any, isValid:boolean, message?:string):void {
        const checker:ValidationRule = this.rules[name] as ValidationRule;
        const err:string | null = !isValid ? (message || (checker.message || 'invalid input')) : null;
        this.results[name] = {
            isValid,
            err,
        }
    }
}

