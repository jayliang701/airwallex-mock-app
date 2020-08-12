import {
    Email,
    CN_Mobile,
    PersonName,
} from '../DefaultValidationRules';

describe('DefaultValidationRules', () => {

    it('check email', () => {
        expect(Email('123@123.com')).toBe(true);
        expect(Email('214sd.f546@ab2324.com')).toBe(true);
        expect(Email('123@.com')).toBe(false);
        expect(Email('@.com')).toBe(false);
        expect(Email('ddg456 @asda3')).toBe(false);
        expect(Email('ddg45asdda3')).toBe(false);
        expect(Email('')).toBe(false);
        expect(Email('    ')).toBe(false);
        expect(Email(null)).toBe(false);
        expect(Email(undefined)).toBe(false);
    })

    it('check cn mobile', () => {
        expect(CN_Mobile('18111600000')).toBe(true);
        expect(CN_Mobile('17111600000')).toBe(true);
        expect(CN_Mobile('13111600000')).toBe(true);
        expect(CN_Mobile('1311160000')).toBe(false);
        expect(CN_Mobile('131116000022')).toBe(false);
        expect(CN_Mobile('1311a16000R')).toBe(false);
        expect(CN_Mobile('')).toBe(false);
        expect(CN_Mobile('           ')).toBe(false);
        expect(CN_Mobile(null)).toBe(false);
        expect(CN_Mobile(undefined)).toBe(false);
    })

    it('check person name', () => {
        expect(PersonName('李小龙')).toBe(true);
        expect(PersonName('abc')).toBe(true);
        expect(PersonName('110')).toBe(true);
        expect(PersonName('ADÉLAÏDE')).toBe(true);
        expect(PersonName('いとう')).toBe(true);
        expect(PersonName('...')).toBe(true);
        expect(PersonName('a b')).toBe(true);
        expect(PersonName('   ')).toBe(false);
        expect(PersonName(' a ')).toBe(false);
        expect(PersonName('sdfsdf 345by3 4b534 53 45')).toBe(true);
        expect(PersonName(null)).toBe(false);
        expect(PersonName(undefined)).toBe(false);
    })

});