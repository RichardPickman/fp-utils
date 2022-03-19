import { compose } from '.';

describe('compose', () => {
    test('Should return: valid result', () => {
        const firstFunc = (x: number) => x + 10;
        const secondFunc = (x: number) => x * 2;
        const thirdFunc = (x: number) => x * 10;

        const composeIt = compose(
            firstFunc,
            secondFunc,
            thirdFunc
        );

        const result = composeIt(10);

        const expectedResult = 210;

        expect(result).toBe(expectedResult);
    });
});