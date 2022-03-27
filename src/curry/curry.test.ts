
import { curry } from '.';


describe('curry', () => {
        test('Should return: valid result', () => {
            const sum = (a: number, b: number, c: number) => a + b + c;
            const curriedSum = curry(sum); // original curried 17:??

            const result = [
                sum(5, 6, 9),
                curriedSum(5,6,9),
                curriedSum(5)(6,9),
                curriedSum(5,6)(9),
                curriedSum(5)(6)(9)
            ].every(item => {
                return item === sum(5,6,9);
            });

            expect(result).toBe(true);
    });
});
