/* function sortAsc(array) {
  if (!Array.isArray(array)) {
    return null;
  }

  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        const tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

function sortDesc(array) {
  if (!Array.isArray(array)) {
    return null;
  }

  let done = false;
  while (!done) {
    done = true;
    for (let i = 0; i < array.length; i += 1) {
      if (array[i + 1] > array[i]) {
        done = false;
        const tmp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

// sortAsc

console.log(sortDesc(2, 1, 3, 5, 4));
console.log(sortDesc([2, 1, 3, 5, 4]));

// sortDesc

console.log(sortAsc(2, 1, 3, 5, 4));
console.log(sortAsc([2, 1, 3, 5, 4]));
 */
