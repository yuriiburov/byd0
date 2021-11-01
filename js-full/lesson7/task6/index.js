const reverseArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.slice().reverse();
};
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 21];
console.log(reverseArray(array));
console.log(array);
