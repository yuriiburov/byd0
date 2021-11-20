import { reverseArray, withdraw, getAdults } from '.';

it('array have to reverse', () => {
  expect(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([
    9, 8, 7, 6, 5, 4, 3, 2, 1,
  ]);
});

it('if array reverse and elements in array reverse too', () => {
  expect(reverseArray(['12', 2, 3, 4, 5, 6, 7, 8, 9])).not.toEqual([
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    '21',
  ]);
});

it('if this is a not array, we will return null', () => {
  expect(reverseArray(12345)).toEqual(null);
});

//

it('check amount if money enough', () => {
  expect(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)).toEqual(
    37
  );
});

it('check amount if money not enough', () => {
  expect(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)).toEqual(
    -1
  );
});

it('test additionaly with money enough', () => {
  expect(
    withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)
  ).not.toEqual(-1);
});

//

it('have to return keys with values more than 18', () => {
  expect(getAdults({ 'John Doe': 19, Tom: 17 })).toEqual({
    'John Doe': 19,
  });
  expect(getAdults({ Ann: 56, Andrey: 7 })).toEqual({ Ann: 56 });
});

it('have to return keys with values equal 18', () => {
  expect(getAdults({ Ann: 18, Andrey: 7 })).toEqual({ Ann: 18 });
});

it('if object is empty, we will return empty object too', () => {
  expect(getAdults({})).toEqual({});
});
