import createArrayOfFunctions from './index';

it('if argument is not found', () => {
  expect(createArrayOfFunctions()).toEqual([]);
});

it('if argument is not a number', () => {
  expect(createArrayOfFunctions('4')).toEqual(null);
});

it("have to return array's current index", () => {
  expect(createArrayOfFunctions(5)[3]()).toEqual(3);
});
