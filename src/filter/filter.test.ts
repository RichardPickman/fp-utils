import { filter } from '.';


describe('findIndex', () => {
        test('Should return: valid result', () => {
            const result = filter((item) => {
                return item > 3;
            }, [1,2,3,4,5,6,7]);

            const expectedResult = [4, 5, 6, 7];

            expect(result).toEqual(expectedResult);
    });
});