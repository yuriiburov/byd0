const getSection = (num) =>
  document
    .querySelector(`span[data-number="${num}"]`)
    .closest('.box')
    .getAttribute('data-section');

console.log(getSection(6));
