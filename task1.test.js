const stringLength = require('./task1.js');

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

// React testing library, try it out later
// import { render, fireEvent } from '@testing-library/react';
//  it('should update the screen on button click', () => {
//     const { getByTestId, getByText } = render(<Calculator />);
//     fireEvent.click(getByText('2'));
//     fireEvent.click(getByText('+'));
//     fireEvent.click(getByText('3'));
//     fireEvent.click(getByText('='));
//     expect(getByTestId('screen')).toHaveTextContent('5');
//   });