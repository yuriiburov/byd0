// 1. return null if length is not integer
// 2. create new array, and doing cycle for with num to length
// 3. push in array Math.random with another methods

// input: num
// output: arr

const getRandomNumbers = (length, from, to) => {
  const arr = [];
  if (to - from < 1) {
    return null;
  }

  for (let i = 0; i < length; i += 1) {
    arr.push(Math.round(Math.random() * (to - from) + from));
  }

  return arr;
};
// examples
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
console.log(getRandomNumbers(5.2, 1.4, 3.22)); // ==> null
