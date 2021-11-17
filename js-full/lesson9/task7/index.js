const getTotalRevenue = (transactions) => {
  let num = 0;
  transactions.forEach((el) => {
    num += el.amount;
  });
  return num;
};

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310

console.log(getTotalRevenue(dayTransactions));
