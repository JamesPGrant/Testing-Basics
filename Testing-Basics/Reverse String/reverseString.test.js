const reverseString = require('./reverseString')

test('reverse a single word', () => {
  expect(reverseString('reverse')).toBe('esrever');
});

test('reverse a sentence', () => {
  expect(reverseString('string reversal')).toBe('lasrever gnirts');
});

test('palindrome is the same', () => {
  expect(reverseString('racecar')).toBe('racecar');
});

test('sentence with palindrome to be the same', () => {
  expect(reverseString('this is a racecar')).toBe('racecar a si siht');
});

test('a number string is reversed', () => {
  expect(reverseString('012345678910')).toBe('019876543210');
});

test('a number, a sentence, and a palindrome', () => {
  expect(reverseString('0123456789 is the racecar number...')).toBe('...rebmun racecar eht si 9876543210');
});