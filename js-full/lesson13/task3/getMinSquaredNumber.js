// 1. walkin' on each index in array and search min number
// 2. found number return to the square

// ? or use method Math.min and return to the square

/**
 *
 * @param {array} arr
 * @returns {number}
 */

export const getMinSquaredNumber = (arr) => {
  let max = Infinity;
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  arr.forEach((el) => {
    if (Math.abs(el) < max) {
      max = Math.abs(el);
    }
  });
  return max * max;
};

console.log(getMinSquaredNumber([])); // null
console.log(getMinSquaredNumber('[-777, 3, -2.1, 6, 45, -20]')); // null
console.log(getMinSquaredNumber([-777, 3, -2.1, 6, 45, -20])); // 4.41
