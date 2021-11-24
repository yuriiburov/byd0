// const callbackPrompt = {
//   message: 'Tell me your number',
//   showPrompt() {
//     const phoneNumber = prompt(this.message);
//     console.log(phoneNumber);
//   },
//   showDeferredPrompt(ms) {
//     setTimeout(this.showPrompt.bind(this), ms);
//   },
// };

// // callbackPrompt.showPrompt();
// callbackPrompt.showDeferredPrompt(2000);

//

// function defer(func, ms) {
//   return function () {
//     setTimeout(func, ms);
//   };
// }

//

// const user = {
//   name: 'Doe',
//   sayHi(age, message) {
//     console.log(`${message}. I'm ${this.name}. I'm ${age} years old.`);
//   },
// };

// const func = user.sayHi;

// const anotherUser = {
//   name: 'Tom',
// };

// func.call(anotherUser, 17, 'Hello');

const callbackPrompt = {
  message: 'Tell me your number',
  showPrompt() {
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },
  showDeferredPrompt() {},
};

callbackPrompt.showPrompt();
