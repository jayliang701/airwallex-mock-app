/** 
 * FormStore stores all the form values.
*/

import { observable, action, toJS } from 'mobx';

import Form from "./Form";

export default class FormStore {

    @observable values:any;

    constructor(values:any) {
        this.values = values || {};
    }
    
    @action
    public setValue(name:string, value:any):void {
        this.values[name] = value;
    }

    public getValue(name:string):any {
        return this.values[name];
    }

    public getValues():any {
        return { ...toJS(this.values) };
    }

}

