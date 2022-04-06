import get from '.';

describe('get', () => {
    test('should return valid result', () => {
        const obj = { a: { b: { c: { d: { yeah: 'Yeap' } } } } };

        const result = get(obj, 'a.b.c.d.yeah', 'no');

        const expectedResult = 'Yeap';

        expect(result).toEqual(expectedResult);
    });

    test('should return valid result with array as arg', () => {
        const obj = { a: { b: { c: { d: { e: 'Concrats' } } } } };

        const result = get(obj, ['a', 'b', 'c', 'd', 'e'], 'no either');

        const expectedResult = 'Concrats';

        expect(result).toEqual(expectedResult);
    });

    test('should return valid result without default value', () => {
        const obj = { a: { b: { c: { d: { e: 'nope' } } } } };

        const result = get(obj, ['a', 'b', 'c', 'd', 'e']);

        const expectedResult = 'nope';

        expect(result).toEqual(expectedResult);
    });

    test('should return default value', () => {
        const obj = { a: { b: { c: { d: { e: 'e' } } } } };

        const result = get(obj, ['a', 'b', 'c', 'd', 's'], 'No way');

        const expectedResult = 'No way';

        expect(result).toEqual(expectedResult);
    });
});
