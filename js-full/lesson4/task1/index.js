let result = 1;

for (let num = 10; num < 20; num += 1) {
  if (num % 2 !== 0) result *= num;
}
console.log('Result: ' + result);
