const calculator = require('./calculator')

test('adds 2 + 2 to equal 4', () => {
  expect(calculator.add(2, 2)).toEqual(4);
})

test('subtracts 4 - 3 to equal 1', () => {
  expect(calculator.subtract(4, 3)).toEqual(1);
})

test('multiplies 5 * 5 to equal 25', () => {
  expect(calculator.multiply(5, 5)).toEqual(25);
})

test('divides 100 / 5 to be 20', ()=>{
  expect(calculator.divide(100, 5)).toEqual(20)
})