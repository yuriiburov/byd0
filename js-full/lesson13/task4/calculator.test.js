import { calc } from './calculator';

it('calculator workflow', () => {
  expect(calc('-3 + 7')).toEqual('-3 + 7 = 4');
  expect(calc('-7 - -2')).toEqual('-7 - -2 = -5');
  expect(calc('7 * -2')).toEqual('7 * -2 = -14');
  expect(calc('-6 / 3')).toEqual('-6 / 3 = -2');
  expect(calc(-6 / 3)).toEqual(null);
});
