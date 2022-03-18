import { map } from '.';


describe('map', () => {
    test('Should return: valid result', () => {
        const result = map((item: number) => item + 1, [12,34,56,78]);

        const expectedResult = [13,35,57,79];

        expect(result).toEqual(expectedResult);
    });
});