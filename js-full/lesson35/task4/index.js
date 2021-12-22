const parseUser = (jsonObj) => {
  try {
    return JSON.parse(jsonObj);
  } catch {
    return null;
  }
};

console.log(parseUser({ name: 'Tom' }));
console.log(parseUser('{ "name": "Tom" }'));
