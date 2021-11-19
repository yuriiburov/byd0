// put your code here

function cloneArr(arr) {
  const array = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i += 1) {
    array.push(arr[i]);
  }
  return array;
}

console.log(cloneArr(1, 2, 3));
console.log(cloneArr([1, 2, 3]));
