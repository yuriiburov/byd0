// window.addEventListener('error', function onUnhandledError(e) {
//   console.log(e);
// });

// try {
//   const jsonString = '{"name":"Tom"';
//   throw new ReferenceError();
//   const userData = JSON.parse(jsonString);
//   console.log(userData);
// } catch (err) {
//   if (err instanceof SyntaxError) {
//     console.error('Handled');
//   } else {
//     throw err;
//   }
// } finally {
//   console.log('Some actions');
// }

//

// const successRequest = Promise.resolve({ name: 'Tom' });

// successRequest
//   .then((data) => {
//     console.log(data);
//     throw new Error('Unexpected error');
//   })
//   .catch((err) => {
//     console.warn(err.message);
//   });

// const failedRequest = Promise.reject(new Error('Failed'));

// failedRequest
//   .then((data) => {
//     console.log(data);
//     throw new Error('Unexpected error');
//   })
//   .catch((err) => {
//     console.warn(err.message);
//     return Promise.reject(err);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.warn(err.message);
//   });

// window.addEventListener('unhandledrejection', function (e) {
//   console.log(e.reason.message);
// });

//

// fetch('https://api.github.com/user/github')
//   .then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     }
//     throw new Error('No data');
//   })
//   .then((data) => console.log(data))
//   .catch((err) => {
//     debugger;
//     console.log(err);
//   });

window.addEventListener('error', function onUnhandledError(err) {
  console.error('error', err.message);
});

let userParsingResult;

try {
  const user = JSON.parse(JSON.stringify({ name: 'Tom' }));
  console.log('User data: ', user);
  userParsingResult = 'success';
} catch (e) {
  userParsingResult = 'error';
} finally {
  console.log(`User parsing finished with ${userParsingResult}`);
}

let productParsingResult;

try {
  const product = JSON.parse("{ name: 'Coat' ");
  console.log('Product data: ', product);
  productParsingResult = 'success';
} catch (e) {
  productParsingResult = 'error';
} finally {
  console.log(`Product parsing finished with ${productParsingResult}`);
}
