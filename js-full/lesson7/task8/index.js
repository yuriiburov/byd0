function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.slice();
}

console.log(cloneArr([1, 2, 3, 4, 5, 6, 7, 8]));
