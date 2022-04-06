import pick from '.';

describe('pick', () => {
    test('Should return valid result', () => {
        const obj = {
            value: 5,
            key: 2,
        };

        const result = pick(obj, 'key');

        const expectedResult = { key: 2 };

        expect(expectedResult).toEqual(result);
    });

    test('Should return valid result', () => {
        const obj = {
            value: 5,
            key: 2,
            nested: {
                value1: 1,
                value2: 2
            }
        };

        const result = pick(obj, 'nested');

        const expectedResult = { nested: { value1: 1, value2: 2 } };

        expect(expectedResult).toEqual(result);
    });
    test('Should return valid result with unknown property', () => {
        const obj = {
            value: 5,
            key: 2,
            nested: {
                value1: 1,
                value2: 2
            }
        };

        const result = pick(obj, 'asd');

        const expectedResult = null;

        expect(expectedResult).toEqual(result);
    });
    test('Should return valid result', () => {
        const obj = {
            value: 5,
            nested: {
                value1: 1,
                value2: 2
            },
            key: 2,
            nested2: {
                value1: 1,
                nested3: {
                    value1: 1,
                    value2: 2
                }
            }
        };

        const result = pick(obj, 'nested3');

        const expectedResult = {
            nested3: {
                value1: 1,
                value2: 2
            }
        };

        expect(expectedResult).toEqual(result);
    });
});
