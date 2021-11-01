/*
const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  // arr.map((num) => arr.filter(num % 2).reduce((odd) => odd + delta));
  return arr.forEach((el, i) =>
    el.filter(i % 2 === 0).map((num) => num + delta)
  );
};

console.log(increaseEvenEl([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));
*/
