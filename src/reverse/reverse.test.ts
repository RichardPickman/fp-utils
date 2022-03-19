import { reverse } from '.';


describe('reverse', () => {
    test('should return a valid result', () => {
        const result = reverse([1, 2, 3, 4, 5]);

        const expectedResult = [5, 4, 3, 2, 1];

        expect(result).toEqual(expectedResult);
    });
});