import { StringCalculator } from './stringCalculator';

describe('StringCalculator', () => {
  it('should return 0 for an empty string', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('')).toBe(0);
  });

  it('should return the number itself if only one number is in the string', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1')).toBe(1);
  });

  it('should return the sum of two numbers separated by a comma', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1,2')).toBe(3);
  });
});
