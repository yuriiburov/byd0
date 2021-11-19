import getSum, { getSquaredNumbers, getOddNumbers } from './calculator';

it('should squared numbers', () => {
  const result = getSquaredNumbers([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]);
});

it('should keep odd numbers only', () => {
  const result = getOddNumbers([1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 3, 5]);
});

it('should kget sum of number', () => {
  const result = getSum(1, 2);
  expect(result).toEqual(3);
});
