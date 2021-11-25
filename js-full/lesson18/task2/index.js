/* eslint-disable lines-around-directive */
/* eslint-disable strict */
// 'use strict';

// const user = {
//   name: 'Tom',
//   sayHi() {
//     console.log(this);
//   },
// };

// // user.sayHi();

// setTimeout(() => user.sayHi(), 1000);

//

// const event = {
//   guests: [
//     { name: 'Tom', email: 't@gmail.com', age: 17 },
//     { name: 'Bob', email: 'b@gmail.com', age: 18 },
//   ],
//   message: 'Welcome to the party',
//   getInvitations() {
//     return this.guests
//       .filter(({ age }) => age >= 18)
//       .map(({ name, email }) => ({
//         text: `Hi ${name}. ${this.message}`,
//         email,
//       }));
//   },
// };

// console.log(event.getInvitations());

//

// const wallet = {
//   transactions: [1, -5, 89, 337, 3],
//   getMax() {
//     return Math.max(...this.transactions);
//   },
//   getMin() {
//     return Math.min(...this.transactions);
//   },
// };

// console.log(wallet.getMax());
// console.log(wallet.getMin());

//

// function argsSum() {
//   return [...arguments].reduce((acc, el) => acc + el, 0);
// }

// console.log(argsSum(1, 2, 3, 4));

//

// export const event = {
//   message: 'Welcome to the party!',
//   guests: [
//     { name: 'John', age: 18, email: 'example@server.com' },
//     { name: 'Ann', age: 17, email: 'example@host.com' },
//     { name: 'Bob', age: 21, email: 'example@domain.com' },
//   ],
//   getInvitations() {
//     return this.guests
//       .filter(({ age }) => age >= 18)
//       .map(({ name, email }) => ({
//         email,
//         message: `Dear ${name}! ${this.message}`,
//       }));
//   },
// };

// console.log(event.getInvitations());

//

const wallet = {
  transactions: [1, 11, 111, 1111, 1119],
  getMax() {
    return Math.max(...this.transactions);
    // return Math.max.apply(null, this.transactions);
  },
  getMin() {
    return Math.min(...this.transactions);
    // return Math.min.apply(null, this.transactions);
  },
};

console.log(wallet.getMax());
console.log(wallet.getMin());
