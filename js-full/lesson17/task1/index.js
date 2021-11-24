// create array with that keys: firstName, lastName
// create function in oject. This function return in console firstName and lastName together

const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.getFullName());
