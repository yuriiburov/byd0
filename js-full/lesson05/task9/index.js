// put your code here
function findDivCount(a, b, n) {
  let y = 0;
  for (let i = a; i <= b; i += 1) {
    if (i % n === 0) {
      y += 1;
    }
  }
  return y;
}

console.log(findDivCount(3, 30, 3));
