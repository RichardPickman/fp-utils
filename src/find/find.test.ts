import { find } from '.';


describe('findIndex', () => {
        test('Should return: valid result', () => {
            const result = find((item) => {
                return item > 6;
            }, [1,2,3,4,5,6,7]);

            const expectedResult = 7;

            expect(result).toBe(expectedResult);
    });
});