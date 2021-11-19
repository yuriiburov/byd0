const getSubArray = (arr, numberOfElements) => {
  const arr1 = [];
  const array = [];
  arr1.length = numberOfElements;
  for (let i = 0; i < arr1.length; i += 1) {
    array.push(arr[i]);
  }
  return array;
};

console.log(getSubArray([11, 4, 8, 3], 2)); // [11, 4]
console.log(getSubArray([1, 2, 3, 4, 5], 3)); // [1, 2, 3]
