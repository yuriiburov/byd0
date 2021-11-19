// 1. writin' split('') to string
// 2. that string transformed to array, and we will use method reverse() to array (string)

/**
 *
 * @param {string} expression
 * @returns {string}
 */

const reverseString = (str) =>
  typeof str === 'string' ? str.split('').reverse().join('') : null;

console.log(reverseString('!gnirts esrever'));
console.log(reverseString(70 - 4));
