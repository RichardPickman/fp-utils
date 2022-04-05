import omit from '.';

describe('omit', () => {
    test('Should return: valid result', () => {
        const obj = {
            key: 'value',
            index: 0,
            position: 5,
        }

        const result = omit(obj, ['index'])

        const expectedResult = {
            key: 'value',
            position: 5,
        }

        expect(result).toEqual(expectedResult);
    });

    test('Should return: valid result with empty array', () => {
        const obj = {
            key: 'value',
            index: 0,
            position: 5,
        }

        const result = omit(obj, [])

        const expectedResult = {
            key: 'value',
            index: 0,
            position: 5,
        }

        expect(result).toEqual(expectedResult);
    });
});
