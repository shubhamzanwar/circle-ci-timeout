const helperFuncs = require('../src/helpers');

describe('the greeting helper function', () => {
    test('should return a string', () => {
        expect(typeof helperFuncs.greet()).toEqual(typeof '');
    });

    test('should return preppend the greeting to first function argument', () => {
        const input = "Bob";
        const expectedOutput = "Hello Bob";
        expect(helperFuncs.greet(input)).toEqual(expectedOutput)
    })
});