// put your code here

function withdraw(clients, balances, client, amount) {
  let result = 0;
  for (let i = 0; i < clients.length; i += 1) {
    if (client === clients[i]) {
      if (balances[i] >= amount) {
        result = balances[i] - amount;
      } else if (balances[i] < amount) {
        result = -1;
      }
    }
  }

  return result;
}

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)); // 37

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)); // -1
