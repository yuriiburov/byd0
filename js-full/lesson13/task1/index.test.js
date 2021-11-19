it('17 equal 17', () => {
  expect(17).toEqual(17);
});

it('18 not equal 17', () => {
  expect(18).not.toEqual(17);
});

const getEvenNumbers = (arr) => arr.filter((i) => i % 2 === 0);

it('array with only even numbers', () => {
  const result = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
  expect(result).toEqual([2, 4, 6, 8]);
});
