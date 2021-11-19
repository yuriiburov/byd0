/* eslint-disable default-case */
// 1. writin' variables a, operation, b and doin' split(' ')
// 2. doin' swith and in each of case operator give +, -, *, /
// 3. that's all operations write to result
// 4. return string with result

/**
 *
 * @param {string} expression
 * @returns {string}
 */

function calc(expression) {
  const [a, operator, b] = expression.split(' ');
  let result;
  switch (operator) {
    case '+':
      result = Number(a) + Number(b);
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
  }
  return `${expression} = ${result}`;
}

console.log(calc('11 + 66'));
console.log(calc('70 - 4'));
console.log(calc('11 + -66'));
console.log(calc('4 - 70'));
console.log(calc('11 * 66'));
console.log(calc('70 / 4'));
console.log(calc('11 * -66'));
console.log(calc('4 / 70'));
