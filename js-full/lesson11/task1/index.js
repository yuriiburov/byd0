// 1. writin' while-cycle to infinity
// 2. transforming first letter to upper case and adding next letter after first
// 3. by parameter 'length' in the end addin' \n

/**
 * @param {string} text
 * @param {number} length
 * @return {array}
 */

const splitText = (text, len = 10) => {
  if (typeof text !== 'string') {
    return null;
  }
  const arr = [];
  let startIndex = 0;
  while (true) {
    const piece = text.substr(startIndex, len);
    if (piece.length === 0) {
      break;
    }
    arr.push(piece[0].toUpperCase() + piece.slice(1));
    startIndex += len;
  }
  return arr.join('\n');
};

console.log(splitText('qwertyuiopasdfghjklzxcvbnm', 5));
console.log(splitText('qwertyuiopasdfghjklzxcvbnm'));
console.log(splitText(5));
