class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(age) {
    this.age = age;
    if (this.age >= 25) {
      this.requestNewPhoto();
    }
    if (this.age < 0) {
      return false;
    }
    return age;
  }

  static createEmpty() {
    return new User('', null);
  }
}

const user1 = new User('Tyler', 23);
console.log(user1);
user1.sayHi();
user1.requestNewPhoto();
console.log(user1.setAge(-2));
console.log(user1.setAge(2));
console.log(user1.setAge(32));
console.log(User.createEmpty());
