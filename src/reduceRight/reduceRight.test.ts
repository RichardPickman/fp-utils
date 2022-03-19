import { reduceRight } from ".";


describe('reduce', () => {
    describe(('with initialState'), () => {
        test('Should return: valid result', () => {
            const result = reduceRight((acc, item) => {
                return acc + item.toString();
            }, [1,2,3,4], '');

            const expectedResult = '4321';

            expect(result).toBe(expectedResult);
        });
    });

    describe('without initialState', () => {
        test('Should return: valid result', () => {
            const result = reduceRight<number, number>((acc, item) => {
                return acc + item;
            }, [1,2,3,4]);

            const expectedResult = 10;

            expect(result).toBe(expectedResult);
        });
    });
});