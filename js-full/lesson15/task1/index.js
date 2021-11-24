/* eslint-disable no-plusplus */
/* eslint-disable no-return-assign */
// const message = 'Have a good day!';

// function sendMessage(name) {
//   const greeting = 'Hi, ';
//   if (name) {
//     console.log(greeting + name);
//   } else if (name === undefined) {
//     console.log(message);
//   }
// }

// sendMessage();
// sendMessage('Yura');

export function makeCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1());
console.log(counter1());
console.log(counter1());

console.log(counter2());
console.log(counter2());
