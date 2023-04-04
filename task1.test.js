const stringLength = require('./task1');

test('counts "harriet" to equal 7', () => {
  expect(stringLength('harriet')).toBe(7);
});

test('harriet is good', () => {
  // expect(() => stringLength('harriet is good')).toThrow();
  expect(() => stringLength('harriet is good')).toThrow(Error);
});

test('', () => {
  // expect(() => stringLength('')).toThrow();
  expect(() => stringLength('')).toThrow(Error);
});
