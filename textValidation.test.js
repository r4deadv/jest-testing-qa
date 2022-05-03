const { generateText, validateText, validateAndReturn } = require('./textValidation')

//Unit Test are fully isolated (e.g., testing one function)
//generateText works with input and output that does not use any other functions
//Unit tests ensure that individual components of the app work as expected. Assertions test the component API.
//WRITE LOTS OF THESE
describe('generateText works', () => {
    it('outputs dog name and breed', () => {
        const dogName = 'Ted'
        const breed = 'Spaniel-Beagle Mix'
        expect(generateText(dogName, breed)).toBe('Ted is a Spaniel-Beagle Mix')
    })
})

describe('validateText works', () => {
    it('outputs true when input is text string', () => {
        const text = 'Stephanie'
        expect(validateText(text)).toBe(true)
    })
    it('outputs false when input is empty', () => {
        const text = ''
        expect(validateText(text)).toBe(true)
    })
     it('outputs false when input is a number', () => {
        const text = 5
        expect(validateText(text)).toBe(false)
    })
})
 
//Integration tests ensure that component collaborations work as expected.
//e.g., testing a function that calls a function (or has dependencies)
//WRITE A COUPLE OF THESE WHERE YOU GET A LOT OF BANG FOR YOUR BUCK
describe('validateAndReturn works', () => {
    it('outputs dog name and breed', () => {
        const dogText = 'Melvin'
        const breed = 'Terrier'
        expect(validateAndReturn(dogText, breed)).toBe('Melvin is a Terrier')
    })
})

//End-to-End test full flow, validating the DOM after a user click
//WRITE A FEW OF THESE

