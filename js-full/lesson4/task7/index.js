// let x = 0;
// for (let i = 0; i <= 1000; i += 1) {
//   if (i % 2 === 1) {
//     console.log('Found');
//     x += i;
//   }
//   if (x > 5000) {
//     console.log('Bigger');
//   } else {
//     console.log('Smaller or equal');
//   }
// }

// put your code here
let x = 0;
for (let i = 0; i <= 1000; i += 1) {
  if (i % 2 === 1) {
    console.log('Found');
    x += i;
  }
}

if (x >= 5000) {
  console.log('Bigger');
} else {
  console.log('Smaller or equal');
}
