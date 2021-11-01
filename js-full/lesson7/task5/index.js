// const squareArray = (arr) => {
//   const array = [];
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   arr.forEach((elem) => {
//     array.push(elem * elem);
//   });

//   return array;
// };

// const arrNum = [2, 4, 5, 7, 33];

// console.log(squareArray('arr'));
// console.log(squareArray(arrNum));
// console.log(arrNum);

//

const squareArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.map((elem) => elem * elem);
};

const arrNum = [2, 4, 5, 7, 33];

console.log(squareArray('arr'));
console.log(squareArray(arrNum));
console.log(arrNum);
