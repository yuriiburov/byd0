/* eslint-disable no-restricted-properties */

// 1. create new array
// 2. step by step with instruction
// 3. push methods in array

/**
 * @param {number} num
 * @param {number} prec
 * @return {number[]}
 */
const superRound = (num, prec) => {
  const arr = [];
  const mathPrec = Math.pow(10, prec);
  arr.push(Math.floor(num * mathPrec) / mathPrec);
  arr.push(Math.trunc(num * mathPrec) / mathPrec);
  arr.push(Math.ceil(num * mathPrec) / mathPrec);
  arr.push(Math.round(num * mathPrec) / mathPrec);
  arr.push(+num.toFixed(prec));
  return arr;
};

// examples
console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(superRound(6.11, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
