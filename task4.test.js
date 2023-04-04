
const capitalize = require('./task4');

test('capitalize "harriet" to return "Harriet"', () => {
  expect(capitalize('harriet')).toBe('Harriet');
});

test('capitalize "Microverse" to return "Microverse"', () => {
  expect(capitalize('Microverse')).toBe('Microverse');
});

test('capitalize "HARRIET" to return "Harriet"', () => {
  expect(capitalize('harriet')).toBe('Harriet');
});

