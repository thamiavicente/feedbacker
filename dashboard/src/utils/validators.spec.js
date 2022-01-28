import {
    validateEmptyAndEmail,
    validateEmptyAndLength3
} from './validators'

describe('Validators utils', () => {
    it('should return error with empty payload', () => {
        expect(validateEmptyAndLength3()).toBe('*Este campo é obrigatório')
    })

    it('should return error with less then 3 characters payload', () => {
        expect(validateEmptyAndLength3('12')).toBe('*Este campo precisa de pelo menos 3 caracteres')
    })

    it('should return success when passed correct param', () => {
        expect(validateEmptyAndLength3('1234')).toBe(true)
    })

    it('should return error with empty payload', () => {
        expect(validateEmptyAndEmail()).toBe('*Este campo é obrigatório')
    })

    it('should return error when insert an invalid param', () => {
        expect(validateEmptyAndEmail('email@.com')).toBe('*Este campo precisa de um e-mail')
    })

    it('should return success when passed correct param', () => {
        expect(validateEmptyAndEmail('email@email.com')).toBe(true)
    })
})