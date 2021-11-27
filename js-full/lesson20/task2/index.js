// class Vehicle {
//   constructor(name, hasWheels) {
//     this.hasWheels = hasWheels;
//     this.name = name;
//   }

//   move() {
//     console.log(`${this.name} is moving`);
//   }

//   stop() {
//     console.log(`${this.name} stopped`);
//   }
// }

// class Ship extends Vehicle {
//   constructor(name, speed) {
//     super(name, false);
//     this.speed = speed;
//   }

//   move() {
//     console.log(`${this.name} lifting anchor up`);
//     super.move();
//   }

//   stop() {
//     super.stop();
//     console.log(`${this.name} lifting anchor down`);
//   }
// }

// const ship1 = new Ship('Aurora', 17);
// // console.log(ship1);
// ship1.stop();

//

// class Wallet {
//   #balance = 0;

//   getBalance() {
//     return this.#balance;
//   }

//   deposit(amount) {
//     this.#balance += amount;
//   }

//   withdraw(amount) {
//     if (amount > this.#balance) {
//       console.log('No enough money');
//       return;
//     }
//     this.#balance -= amount;
//   }
// }

// const wallet1 = new Wallet();
// console.log(wallet1.getBalance());
// wallet1.deposit(30);
// console.log(wallet1.getBalance());
// wallet1.withdraw(31);
// console.log(wallet1.getBalance());
// wallet1.withdraw(29);
// console.log(wallet1.getBalance());

/* eslint max-classes-per-file: ["error", 2] */

class Vehicle {
  constructor(name, numberOfWheels) {
    this.name = name;
    this.numberOfWheels = numberOfWheels;
  }

  move() {
    console.log(`${this.name} is moving`);
  }

  stop() {
    console.log(`${this.name} stopped`);
  }
}

class Ship extends Vehicle {
  constructor(name, numberOfWheels, maxSpeed) {
    super(name, numberOfWheels);
    this.maxSpeed = maxSpeed;
  }

  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move();
  }

  stop() {
    super.stop();
    console.log(`${this.name} lifting anchor down`);
  }
}
