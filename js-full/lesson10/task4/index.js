/* eslint-disable no-unused-expressions */

// 1. create variable with -infinity
// 2. if array's element more than variable, change it (variable)

/**
 * @param {number[]} arr
 * @return {number}
 */
const getMaxAbsoluteNumber = (arr) => {
  let max = -Infinity;
  !Array.isArray(arr) || arr.length === 0
    ? (max = null)
    : (max = Math.max(Math.abs(...arr)));
  return max;
};

// examples
console.log(getMaxAbsoluteNumber([-10, 10, -10])); // ===> 10
console.log(getMaxAbsoluteNumber([2.1, 0, 1.6])); // ===> 2.1
console.log(getMaxAbsoluteNumber([-6, 3, 5, -1])); // ===> 6
console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20])); // ===> 777
console.log(getMaxAbsoluteNumber(777)); // ===> null
console.log(getMaxAbsoluteNumber([])); // ===> null
