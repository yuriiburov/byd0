// localStorage.clear();
// localStorage.setItem('hobbies', JSON.stringify({ name: 'Bob' }));
// localStorage.setItem('name', 'Tom');
// localStorage.setItem('age', JSON.stringify(17));

// // console.log(JSON.parse(localStorage.getItem('hobbies')));

// const getLocalStorageData = () =>
//   Object.entries(localStorage).reduce((acc, [key, value]) => {
//     let newValue;
//     try {
//       newValue = JSON.parse(value);
//     } catch (error) {
//       newValue = value;
//     }

//     return {
//       ...acc,
//       [key]: newValue,
//     };
//   }, {});

// console.log(getLocalStorageData());

localStorage.clear();
localStorage.setItem('person', JSON.stringify({ name: 'Bob' }));
localStorage.setItem('age', 17);
localStorage.setItem('job', 'UI/UX');
localStorage.setItem(
  'hobbies',
  JSON.stringify(['football', 'collecting cards', 'play on broken guitar'])
);

const getLocalStorageData = () =>
  Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }

    return {
      ...acc,
      [key]: newValue,
    };
  }, {});

console.log(getLocalStorageData());
