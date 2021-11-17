/* eslint-disable radix */

// 1. create new array with method .map
// 2. doing something with each array's element in new array

// input: array
// output: array

const array = ['17ert', '17.5qwertg', 17, 17.5, NaN, undefined, null];

const getParsedIntegers = (arr) => arr.map((el) => Number.parseInt(el));

console.log(getParsedIntegers(array));

//

const getParsedIntegersV2 = (arr) => arr.map((el) => parseInt(el));

console.log(getParsedIntegersV2(array));

//

const getParsedFloats = (arr) => arr.map((el) => Number.parseFloat(el));

console.log(getParsedFloats(array));

//

const getParsedFloatsV2 = (arr) => arr.map((el) => parseFloat(el));

console.log(getParsedFloatsV2(array));
