// put your code here

function checkSum(arr) {
  let plus = 0;
  for (let i = 0; i < arr.length; i += 1) {
    plus += arr[i];
  }
  if (plus > 100) {
    return true;
  }
  if (!Array.isArray(arr)) {
    return null;
  }
  return false;
}

console.log(checkSum([30, 80, 10]));
console.log(checkSum([80, 10]));
console.log(checkSum(30, 80, 10));
