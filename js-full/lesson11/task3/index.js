// 1. with help substr method we got a string with required length
// 2. symbols which no enough push '.'

/**
 * @param {string} text
 * @param {number} number
 * @return {array}
 */

function splitString(text, number = 10) {
  if (typeof text !== 'string') {
    return null;
  }
  let startPosition = 0;
  const strArr = [];
  while (true) {
    const piece = text.substr(startPosition, number);

    if (piece.length === 0) {
      break;
    }

    strArr.push(piece);
    startPosition += number;
  }
  while (strArr[strArr.length - 1].length < number) {
    strArr[strArr.length - 1] += '.';
  }
  return strArr;
}

console.log(splitString('qwertyuioplkjhxcvbm', 3));
console.log(splitString(3, 3));
