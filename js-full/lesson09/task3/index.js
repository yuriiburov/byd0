const users = { Tom: 17, 'John Doe': 19, Bob: 18 };

function getKeys(obj) {
  Object.keys(obj).forEach((el) => console.log(el));
}

getKeys(users);
