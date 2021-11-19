// /**
//  * @param {number[]} numbers
//  * @return {number[]}
//  */
// function swap(numbers) {
//   const [start, ...num] = numbers;
//   return [...num, start];
// }

// /**
//  * @param {number[]} numbers
//  * @return {number[]}
//  */
// function swapManual(numbers) {
//   const firstElement = numbers[0];
//   const arr = numbers;
//   arr.shift();
//   arr.push(firstElement);
//   return arr;
// }

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swap(numbers) {
  const [start, ...num] = numbers;
  return [...num, start];
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
  const swapin = [];
  for (let num = 1; num < numbers.length; num += 1) {
    swapin.push(numbers[num]);
  }
  swapin.push(numbers[0]);
  console.log(numbers);
  return swapin;
}

// examples
console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
