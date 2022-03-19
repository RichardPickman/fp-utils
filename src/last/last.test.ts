import { last } from '.';

describe('last', () => {
    test('Should return: valid result', () => {
        const result = last([1,2,3,4,5]);

        const expectedResult = 5;

        expect(result).toBe(expectedResult);
    });
});