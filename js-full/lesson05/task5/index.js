let result = 0;
function getSum(num1, num2) {
  for (let i = num1; i <= num2; i += 1) {
    if (i % 2 === 0) {
      result += i;
    }
  }
  return result;
}
