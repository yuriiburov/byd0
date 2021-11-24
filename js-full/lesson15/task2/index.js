/* eslint-disable no-return-assign */
function createCalculator() {
  let result = 0;

  const add = (num) => (result += num);

  const decrease = (num) => (result -= num);

  const reset = () => (result = 0);

  const getMemo = () => result;

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
}

const calculator1 = createCalculator();
const calculator2 = createCalculator();

console.log(calculator1.add(3));
console.log(calculator1.getMemo());
console.log(calculator2.getMemo());
