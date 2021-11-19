function checker(arr) {
  let zero = 0;
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i += 1) {
    zero += arr[i];
  }
  if (zero > 1000) {
    return true;
  }
  return false;
}

console.log(checker(123, 456, 789));
console.log(checker([123, 456, 789]));
console.log(checker([123, 456]));
