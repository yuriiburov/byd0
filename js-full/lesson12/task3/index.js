// 1. by help of Number we will take numbers only
// 2. use toFixed to numbers
// 3. push ($ + number) in array

const arrWithSomething = [' 1.9', '16.4', ' 17', '1 dollar'];

/**
 *
 * @param {string} expression
 * @returns {string}
 */

const cleanTransactionsList = function (array) {
  const arr = [];
  array.forEach((i) => {
    if (Number.isFinite(Number(i))) {
      arr.push(`$${Number(i).toFixed(2)}`);
    }
  });
  return arr;
};

console.log(cleanTransactionsList(arrWithSomething));
console.log(arrWithSomething);
