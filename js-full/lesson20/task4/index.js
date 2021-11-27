/* eslint-disable lines-around-directive */
/* eslint-disable strict */
'use strict';

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */

// step 1 and last: just look in the top (/** field */)

class Order {
  constructor(price, city, type, confirmed = false) {
    this.price = price;
    this.city = city;
    this.type = type;
    this.isConfirmed = confirmed;
    // transform number to string, couse it says in the top
    this.id = Math.random() + '';
    this.dateCreated = new Date();
  }

  checkPrice() {
    if (this.price > 1000) {
      return true;
    }
    return false;
  }

  confirmOrder() {
    this.isConfirmed = true;
    this.dateConfirmed = new Date();
  }

  isValidType() {
    if (this.type === 'Buy' || this.type === 'Sell') {
      return true;
    }
    return false;
  }
}

const order1 = new Order(1000, 'Lviv', 'Buy');
const order2 = new Order(1001, 'Kyiv', 'Ski mask');
const order3 = new Order(1002, 'Odessa', 'Sell');
console.log(order1);
console.log(order2);
console.log(order3);
console.log(order1.checkPrice());
console.log(order2.checkPrice());
console.log(order3.checkPrice());
console.log(order1.isValidType());
console.log(order2.isValidType());
console.log(order3.isValidType());
order3.confirmOrder();
console.log(order1);
console.log(order2);
console.log(order3);
