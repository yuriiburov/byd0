// put your code here
function removeDuplicates(array) {
  const arr = [];
  for (let i = 0; i < array.length; i += 1) {
    if (!arr.includes(array[i])) {
      arr.push(array[i]);
    }
  }
  return arr;
}

console.log(removeDuplicates([1, 1, 2, 3, 3, 4, 5, 5]));
