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

class Wallet {
  balance = 0;

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log('No enough funds');
      return;
    }
    this.balance -= amount;
  }
}

const wallet = new Wallet();
console.log(wallet.getBalance() + ' // 0');
wallet.deposit(30);
console.log(wallet.getBalance() + ' // 30');
wallet.withdraw(31);
console.log(wallet.getBalance() + ' // 30');
wallet.withdraw(29);
console.log(wallet.getBalance() + ' // 1');
