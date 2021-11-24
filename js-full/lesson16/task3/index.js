const createArrayOfFunctions = (num) => {
  const arr = [];

  if (num === undefined) {
    return arr;
  }
  if (!Number.isInteger(num)) {
    return null;
  }

  for (let i = 0; i < num; i += 1) {
    arr[i] = function () {
      return i;
    };
  }
  return arr;
};

export default createArrayOfFunctions;
