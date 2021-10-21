// put your code here
let sum = 0;
for (let i = 1; i <= 1000; i += 1) {
  sum += i;
}

const div = sum / 1234;
const mods = sum % 1234;

const result = true ? div > mods : mods > div;
console.log(result);
