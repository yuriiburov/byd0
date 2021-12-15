/**
 * @param {string} userId
 * @return {promise}
 */
const requestUserData = (userId) =>
  new Promise((rulfilled, rejected) => {
    if (userId === 'broken') {
      setTimeout(() => {
        rejected(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        rulfilled({
          name: 'John',
          age: 17,
          userId,
          email: `${userId}@example.com`,
        });
      }, 1000);
    }
  });

requestUserData('broken-1')
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
  .finally(() => console.log('finally'));
