export function defer(func, ms) {
  return function () {
    // eslint-disable-next-line prefer-rest-params
    setTimeout(() => func.call(this, ...arguments), ms);
  };
}

// const user = {
//   name: 'Tom',
//   sayHi() {
//     console.log(`Hi, I'm ${this.name}!`);
//   },
// };

// const deferredHi = defer(user.sayHi, 2000);
// deferredHi.call({ name: 'Bob' });
