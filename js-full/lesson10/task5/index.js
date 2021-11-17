// 1. plussing array's elements with method reduce
// 2. take action with Math.float 'couse we wanna take 'special' number

// input: arr
// output: num

const getTotalPrice = (arr) =>
  '$' +
  arr.reduce(
    (firstEl, secondEl) => Math.floor((firstEl + secondEl) * 100) / 100,
    0
  );

// examples
console.log(getTotalPrice([-10.23456, 10.5432, -10.6543])); // ===> -10.36
console.log(getTotalPrice([2.1, 0.65, 1.6])); // ===> 4.34
console.log(getTotalPrice([-6, 3, 5, -1.111])); // ===> 0.88
console.log(getTotalPrice([-777.657, 3, -1, 45, -20])); // ===> -750.66
