import { reduce } from '.';


describe('reduce', () => {
    describe(('with initialState'), () => {
        test('Should return: valid result', () => {
            const result = reduce((acc, item) => {
                return acc + item.toString();
            }, [1,2,3,4], '');

            const expectedResult = '1234';

            expect(result).toBe(expectedResult);
        });
    });

    describe('without initialState', () => {
        test('Should return: valid result', () => {
            const result = reduce<number, number>((acc, item) => {
                return acc + item;
            }, [1,2,3,4]);

            const expectedResult = 10;

            expect(result).toBe(expectedResult);
        });
    });
});