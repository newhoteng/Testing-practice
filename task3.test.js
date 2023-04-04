const calculator= require('./task3');

describe('additions', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test('adds 2 + 2 to equal 4', () => {
    expect(calculator.add(2, 2)).toBe(4);
  });

  test('adds 4 + 2 to equal 6', () => {
    expect(calculator.add(4, 2)).toBe(6);
  });
})

describe('subtrations', () => {
  test('subtract 2 from 8 to equal 6', () => {
    expect(calculator.subtract(8, 2)).toBe(6);
  });

  test('subtract 1 from 2 to equal 1', () => {
    expect(calculator.subtract(2, 1)).toBe(1);
  });

  test('subtract 3 from 9 to equal 6', () => {
    expect(calculator.subtract(9, 3)).toBe(6);
  });
})

describe('divisions', () => {
  test('divide 2 by 2 to equal 1', () => {
    expect(calculator.divide(2, 2)).toBe(1);
  });

  test('divide 4 by 2 to equal 1', () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });

  test('divide 9 by 3 to equal 3', () => {
    expect(calculator.divide(9, 3)).toBe(3);
  });
})

describe('multiplications', () => {
  test('multiply 2 by 2 to equal 4', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
  });

  test('multiply 9 by 2 to equal 18', () => {
    expect(calculator.multiply(9, 2)).toBe(18);
  });

  test('multiply 5 by 5 to equal 25', () => {
    expect(calculator.multiply(5, 5)).toBe(25);
  });
})
