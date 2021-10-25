// put your code here
function reverseArray(arr) {
  const array = [];
  for (let i = 0; i < arr.length; i += 1) {
    array.unshift(arr[i]);
  }
  if (!Array.isArray(arr)) {
    return null;
  }
  return array;
}

console.log(reverseArray(1, 2, 3));
console.log(reverseArray([1, 2, 3]));
