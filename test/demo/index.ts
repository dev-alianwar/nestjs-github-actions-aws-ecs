export function fizzBuzz(values: number[]): string {
  const result: (string | number)[] = [];

  for (const value of values) {
    if (value % 15 === 0) {
      result.push('fizzbuzz');
    } else if (value % 3 === 0) {
      result.push('fizz');
    } else if (value % 5 === 0) {
      result.push('buzz');
    } else {
      result.push(value);
    }
  }

  return result.join(', ');
}
