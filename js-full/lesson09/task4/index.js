/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */
/* eslint-disable dot-notation */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

const user1 = {
  name: 'Sam',
};

const user2 = {
  name: 'Sam',
};

const user3 = {
  name: 'Sam',
};

const user4 = {
  name: 'Sam',
};

function addPropertyV1(userData, userId) {
  userData.id = userId;
  return userData;
}

function addPropertyV2(userData, userId) {
  const obj = Object.assign(userData);
  obj['id'] = userId;
  return obj;
}

function addPropertyV3(userData, userId) {
  const copyObj = Object.assign({}, userData);
  copyObj.id = userId;
  return copyObj;
}

function addPropertyV4(userData, userId) {
  const obj = { ...userData };
  obj.id = userId;
  return obj;
}

// examples

console.log(addPropertyV1(user1, '1234567')); // ==> { name: 'Sam', id: '1234567' }
console.log(addPropertyV2(user2, '1234567')); // ==> { name: 'Sam', id: '1234567' }
console.log(addPropertyV3(user3, '1234567')); // ==> { name: 'Sam', id: '1234567' }
console.log(addPropertyV4(user4, '1234567')); // ==> { name: 'Sam', id: '1234567' }
