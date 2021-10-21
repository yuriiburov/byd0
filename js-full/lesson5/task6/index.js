// /**
//  * @param {number} num
//  * @return {undefined}
//  */
// function getPrimes(num) {
//   let result = 2;
//   for (let i = 2; i <= num; i += 1) {
//     for (let j = 2; j < i; j += 1) {
//       if (i % j === 0) result += !i;
//       result += String(i);
//     }
//   }
//   return result;
// }

// console.log(getPrimes(17));

// function isPrime(num) {
//   for (let i = 2, max = Math.sqrt(num); i <= max; i += 1) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// function getPrimes(num){
//   for(let i = 2; i <= num; i+=1){
//     if(isPrime(i)){
//       return;
//     }
//   }
// }

/**
 * @param {number} num
 * @return {undefined}
 */
function getPrimes(num) {
  let result = 0;
  for (let i = 2; i <= num; i += 1) {
    for (; result < i; result += 1) {
      if (i % result === 1 || i % result === 0) {
        result += 1;
        console.log(result);
      }
    }
  }
}
console.log(getPrimes(17));
