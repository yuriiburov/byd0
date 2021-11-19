// /* eslint-disable no-return-assign */

// 1. with help split('') we will get array with each letter
// 2. we will find with includes('something') cuurent word in array

/**
 * @param {string} text
 * @param {string} str
 * @return {number}
 */

// function countOccurrences(text = '', str) {
//   if (str === '') {
//     return null;
//   }
//   let num = 0;
//   text.split('').filter((el) => (num += el.includes(str)));
//   return num;
// }

function countOccurrences(text = '', str) {
  if (str === '') {
    return null;
  }
  let count = 0;
  let underLine = text;
  while (true) {
    if (text.indexOf(str) === -1) {
      break;
    }

    const position = underLine.indexOf(str);

    underLine = underLine.slice(position + 1);

    count += 1;

    if (underLine.indexOf(str) < 0) {
      break;
    }
  }
  return count;
}

console.log(countOccurrences('qwewqwewqwewqwe', 'q'));
console.log(countOccurrences('qwewqwewqwewqwe', ''));
