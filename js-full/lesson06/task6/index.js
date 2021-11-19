/**
 * @param {number[]} arr
 * @return {number[]}
 */
function squareArray(arr) {
  const array = [];
  for (let i = 0; i < arr.length; i += 1) {
    array.push(arr[i] * arr[i]);
  }
  if (!Array.isArray(arr)) {
    return null;
  }
  return array;
}

// examples
console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
console.log(squareArray([10, 0, -4])); // ==> [100, 0, 16]
console.log(squareArray([1])); // ==> [1]
console.log(squareArray(1)); // ==> [null]
