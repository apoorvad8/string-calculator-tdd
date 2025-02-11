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

  it('should handle an unknown amount of numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1,2,3,4,5')).toBe(15);
  });

  it('should handle new lines between numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1\n2,3')).toBe(6);
  });

  it('should support different delimiters', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('//;\n1;2')).toBe(3);
  });

  it('should throw an exception when a negative number is used', () => {
    const calculator = new StringCalculator();
    expect(() => calculator.add('1,-2,3')).toThrowError('Negatives not allowed: -2');
  });

  it('should throw an exception showing all negative numbers', () => {
    const calculator = new StringCalculator();
    expect(() => calculator.add('1,-2,3,-4')).toThrowError('Negatives not allowed: -2,-4');
  });

});
