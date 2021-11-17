// const getMaxAbsoluteNumber = (arr) => {
//   let max = -Infinity;
//   arr.forEach((num) => {
//     if (Math.abs(num) > max) {
//       max = Math.abs(num);
//     }
//   });
//   return max;
// };

// const getMaxAbsoluteNumber = (arr) => {
//   const AbsoluteValues = arr.map((num) => Math.abs(num));
//   return Math.max(...AbsoluteValues);
// };

// console.log(getMaxAbsoluteNumber([-4, -1, 6.345678, 4.768]));

// 1. filter array
// 2. doing something with each array's element

// input: array
// output: array

const array = ['17', '17.5', 17, 17.5, NaN, undefined, null];

const getFiniteNumbers = (arr) => arr.filter((el) => Number.isFinite(el));

console.log(getFiniteNumbers(array));

//

const getFiniteNumbersV2 = (arr) => arr.filter((el) => isFinite(el));

console.log(getFiniteNumbers(array));

//

const getNaN = (arr) => arr.filter((el) => Number.isNaN(el));

console.log(getNaN(array));

//

const getNaNV2 = (arr) => arr.filter((el) => isNaN(el));

console.log(getNaNV2(array));

//

const getIntegers = (arr) => arr.filter((el) => Number.isInteger(el));

console.log(getIntegers(array));
