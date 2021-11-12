function increaseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.map((num) => (num % 2 === 0 ? num + delta : num));
}

console.log(increaseEvenEl([1, 2, 3, 4, 5, 6, 7, 8], 20));
