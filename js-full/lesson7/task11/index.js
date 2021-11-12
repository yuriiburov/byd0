const filterNames = (arr, text) =>
  arr.filter((name) => name.includes(text) && name.length > 5);

console.log(
  filterNames(
    ['John', 'Olivya', 'Olexandr', 'Emanuel', 'Vanya', 'Nastya'],
    'ya'
  )
);
