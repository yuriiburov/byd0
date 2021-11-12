const withdraw = (clients, balances, client, amount) => {
  let result = 0;
  clients.forEach((num, i) => {
    if (num.includes(client)) {
      if (balances[i] >= amount) {
        result = balances[i] - amount;
      } else if (balances[i] < amount) {
        result = -1;
      }
    }
  });

  return result;
};
// input
// example 1:

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));

// output
// 37
// и массив balances должен быть [1400, 37, -6]

// example 2:

// input

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));

// output
// -1
// и массив balances должен быть [1400, 87, -6]
