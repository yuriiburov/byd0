const users = {
  Tom: 17,
  'John Doe': 19,
  Bob: 18,
};

const getAdults = (obj) =>
  Object.entries(obj)
    .filter((num) => num[1] >= 18)
    .map((el) => el[0]);

console.log(getAdults(users));
