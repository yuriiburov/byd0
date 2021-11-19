// const flatArray = (arr) =>
//   arr.reduce((acc, elem) => acc.concat(elem), []).sort((a, b) => a - b);

const flatArray = (arr) => arr.flat().sort((a, b) => a - b);

console.log(flatArray([1, 3, [2, 45, 4], 5, [6]]));
