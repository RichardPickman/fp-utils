import { reduce } from '.'


describe('reduce', () => {
    describe(('with initialState'), () => {
        test('Should return: valid result', () => {
            const result = reduce((acc, item) => {
                return acc +  ' oh ' + item
            }, [1,2,3,4], '');
        
            const expectedResult = ' oh 2 oh 3 oh 4';
        
            expect(result).toBe(expectedResult);
    })
    });
    
    describe('without initialState', () => {
        test('Should return: valid result', () => {
            const result = reduce((acc, item) => {
                return acc + item.toString() 
            }, [1,2,3,4]);
        
            const expectedResult = '1234';
        
            expect(result).toBe(expectedResult);
        });
    });
}); 