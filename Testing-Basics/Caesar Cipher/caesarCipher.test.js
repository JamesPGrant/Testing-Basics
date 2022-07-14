const caesarCipher = require('./caesarCipher');

test('string is equal to mnlcha', ()=>{
  expect(caesarCipher('string', 20)).toBe('mnlcha');
})

test('hello world matches mjqqt btwqi', () => {
  expect(caesarCipher('Hello World!', 5)).toBe('mjqqt btwqi!');
})

test('single letter', () =>{
  expect(caesarCipher('A', 1)).toBe('b')
})

test('no letters', () => {
  expect(caesarCipher('', 20)).toBe('')
})