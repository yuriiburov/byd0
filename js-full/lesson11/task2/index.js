// const splitText = (text, length) => {
//   const strArr = [];
//   let startPosition = 0;
//   while (true) {
//     const chunk = text.substr(startPosition, length);
//     if (chunk.length === 0) {
//       break;
//     }
//     strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
//     startPosition += length;
//   }
//   return strArr.join('\n');
// };

// console.log(splitText('qwertyuiopasdfghjklzxcvbnm', 5));

//

const contacts = [
  {
    name: 'Tom',
    phoneNumber: '666-66-66',
  },
  {
    name: 'John',
    phoneNumber: '555-55-55',
  },
  {
    name: 'Ann',
    phoneNumber: '444-44-44',
  },
  {
    name: 'Stephan',
    phoneNumber: '333-33-33',
  },
  {
    name: 'Suzy',
    phoneNumber: '222-22-22',
  },
  {
    name: 'Adel',
    phoneNumber: '111-11-11',
  },
];

// 1. sort current arr
// 2. create sort condition

/**
 * @param {array} names
 * @param {boolean} upOrDown
 * @return {array}
 */

// const sortContacts = (names, upOrDown) =>
//   Array.isArray(names)
//     ? names.sort((firstEl, secondEl) =>
//         upOrDown === true || undefined
//           ? firstEl.name.localeCompare(secondEl.name)
//           : secondEl.name.localeCompare(firstEl.name)
//       )
//     : null;

function sortContacts(arr, upOrDown = true) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const result = arr.sort((a, b) => {
    if (upOrDown) {
      return a.name.localeCompare(b.name);
    }
    return b.name.localeCompare(a.name);
  });
  return result;
}

console.log(sortContacts(contacts, false));
console.log(sortContacts(contacts, true));
console.log(sortContacts(contacts));
console.log(sortContacts({ contacts }));
