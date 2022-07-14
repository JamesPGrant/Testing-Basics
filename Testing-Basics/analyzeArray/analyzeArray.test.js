const analyzeArray = require('./analyzeArray')

describe('analyzeArray', () => { 
    test('object assignment', () => {
      expect(analyzeArray([1,8,3,4,2,6])).toEqual({ avg: 4, min: 1, max: 8, len: 6 });
    });
})

describe('analyzeArray', () => {
    test('empty array', () => {
      expect(analyzeArray([])).toBe('ERROR');
    }); 
})
