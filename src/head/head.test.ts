import { head } from '.';

describe('head', () => {
    test('Should return: valid result', () => {
        const result = head([1,2,3,4,5]);

        const expectedResult = 1;

        expect(result).toBe(expectedResult);
    });
});