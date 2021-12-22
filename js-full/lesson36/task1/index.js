// async function func() {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(17);
//     }, 1000);
//   });
//   const result = await promise;
//   console.log(result);
//   console.log('Hello');
//   return 1;
// }

// const result = func();
// console.log('Hi');
// console.log(result);

//

// const getUser = async (userId) => {
//   try {
//     const response = await fetch(`https://api.github.com/users/${userId}`);
//     if (!response.ok) {
//       return null;
//     }
//     const userData = await response.json();
//     return userData;
//   } catch (err) {
//     throw new Error('Failed to fetch user');
//   }
// };

// getUser('yuriiburov')
//   .then((userData) => console.log(userData))
//   .catch((err) => alert(err.message));

const fetchUser = async (userId) => {
  try {
    const user = await fetch(`https://api.github.com/users/${userId}`);
    if (user.status === 404) {
      return null;
    }
    return await user.json();
  } catch {
    throw new Error('Failed to fetch user');
  }
};

fetchUser('facebookfkbhjvwefli')
  .then((userData) => console.log(userData))
  .catch((err) => err.message);
