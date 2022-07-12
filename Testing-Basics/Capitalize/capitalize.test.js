const capitalize = require('./capatilize')

test('single word to have first letter capitalized', () => {
  expect(capitalize('hello!')).toBe('Hello!');
})

test('sentece to have each first letter of a word', () => {
  expect(capitalize('hello, world!')).toBe('Hello, World!');
})