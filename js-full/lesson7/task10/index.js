const sum = (arr) =>
  Array.isArray(arr) ? arr.reduce((acc, num) => acc + num) : null;

console.log(sum([2, 5, 6, 3, 0, 3, -1]));
