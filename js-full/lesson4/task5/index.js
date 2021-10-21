// put your code here
// const n = 8;
// const sum = 0;
// for (let x = 0; x <= n; x += 1) {
//   while (sum < n) {
//     x += '';
//   }
// }

// console.log(String(sum));

const n = 8;
let sum = 1;
for (let x = 2; x <= n; x += 1) {
  sum += String(x);
}

console.log(sum);
