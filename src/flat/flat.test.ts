import { flat } from '.';


describe('flat', () => {
    test('Should return: valid result for nested array', () => {
        const result = flat([1, [1, [1]], 1]);
        const expectedResult = [1, 1, 1, 1];

        expect(result).toEqual(expectedResult);
    });

    test('Should return: valid result for flat array', () => {
        const result = flat([1, [1, [1]], 1]);
        const expectedResult = [1, 1, 1, 1];

        expect(result).toEqual(expectedResult);
    });
});