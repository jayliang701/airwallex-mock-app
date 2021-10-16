import * as DefaultValidationRules from "./DefaultValidationRules"
// @ponicode
describe("DefaultValidationRules.Email", () => {
    test("0", () => {
        let callFunction: any = () => {
            DefaultValidationRules.Email(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("DefaultValidationRules.CN_Mobile", () => {
    test("0", () => {
        let callFunction: any = () => {
            DefaultValidationRules.CN_Mobile(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("DefaultValidationRules.PersonName", () => {
    test("0", () => {
        let callFunction: any = () => {
            DefaultValidationRules.PersonName(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
