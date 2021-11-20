import { getMinSquaredNumber } from './getMinSquaredNumber';

it('min number * min number in array', () => {
  expect(getMinSquaredNumber([])).toEqual(null);
  expect(getMinSquaredNumber('[]')).toEqual(null);
  expect(getMinSquaredNumber([-777, 3, -2.1, 6, 45, -20])).toEqual(4.41);
});
