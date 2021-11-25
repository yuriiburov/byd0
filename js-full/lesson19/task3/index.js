function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (age) {
  this.age = age;
  if (age >= 25) {
    this.requestNewPhoto();
  }
  if (age < 0) {
    return false;
  }
  return age;
};

const user1 = new User('John', 19);
console.log(user1);

user1.sayHi();
user1.requestNewPhoto();
user1.setAge(24);
console.log(user1);
user1.setAge(25);
console.log(user1);
