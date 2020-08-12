import FormStore from '../FormStore';

describe('FormStore', () => {

    it('get value', () => {
        const store:FormStore = new FormStore({ name:'jay' });
        expect(store.getValue('name')).toBe('jay');
    })

    it('set values', () => {
        const store:FormStore = new FormStore({ name:'jay', age:18 });
        expect(store.getValue('age')).toBe(18);

        store.setValue('age', 19);

        expect(store.getValue('age')).toBe(19);
    })

    it('get values', () => {
        const store:FormStore = new FormStore({ name:'jay', age:18 });
        const values1:any = store.getValues();
        expect(values1.name).toBe('jay');
        expect(values1.age).toBe(18);

        store.setValue('age', 19);

        const values2:any = store.getValues();
        expect(values2.age).toBe(19);

        // getValues() will return an immutable object
        expect(values1.age).toBe(18);
    })

});