/* eslint-disable prefer-destructuring */
// create in obj: name, surname, method, which concat name and surname (full name)
// create method which take full name with full name in argument

// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   setFullName(name, surname) {
//     this.firstName = name;
//     this.lastName = surname;
//   },
// };
// console.log(user.getFullName());
// user.setFullName('Bob', 'Marley');
// console.log(user);

const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    this.firstName = fullName.split(' ')[0];
    this.lastName = fullName.split(' ')[1];
  },
};
console.log(user.getFullName());
user.setFullName('bob marley');
console.log(user);
