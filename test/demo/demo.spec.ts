import { fizzBuzz } from './index';

describe('FizzBuzz', () => {
  test('[3] should result in "fizz"', () => {
    expect(fizzBuzz([3])).toBe('fizz');
  });

  test('[5] should result in "buzz"', () => {
    expect(fizzBuzz([5])).toBe('buzz');
  });

  test('[15] should result in "fizzbuzz"', () => {
    expect(fizzBuzz([15])).toBe('fizzbuzz');
  });

  test('[1,2,3] should result in "1, 2, fizz"', () => {
    expect(fizzBuzz([3])).toBe('fizz');
  });
});
