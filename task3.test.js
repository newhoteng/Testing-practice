const calculator= require('./task3');

describe('calculations', () => {
  test('add 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test('subtract 1 from 2 to equal 1', () => {
    expect(calculator.subtract(2, 1)).toBe(1);
  });

  test('divide 4 by 2 to equal 2', () => {
    expect(calculator.subtract(4, 2)).toBe(2);
  });

  test('multiply 2 by 2 to equal 4', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
  });
})
