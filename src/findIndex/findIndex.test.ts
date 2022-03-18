import { findIndex } from '.';


describe('findIndex', () => {
        test('Should return: valid result', () => {
            const result = findIndex((item) => {
                return item > 6;
            }, [1,2,3,4,5,6,7]);

            const expectedResult = 6;

            expect(result).toBe(expectedResult);
    });
});