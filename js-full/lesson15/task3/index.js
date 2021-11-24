/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-restricted-syntax */
/**
 *
 * @param {undefined}
 * @return
 */
// function createLogger() {
//   function warn(text) {
//     return text;
//   }
//   function error(text) {
//     return text;
//   }
//   function log(text) {
//     return text;
//   }

//   function getRecords(text) {
//     const arr = [];
//     if (text === 'warn') {
//       arr.unshift({
//         message: warn(),
//         type: text,
//         dateTime: new Date(),
//       });
//     } else if (text === 'error') {
//       arr.unshift({
//         message: error(),
//         type: text,
//         dateTime: new Date(),
//       });
//     } else if (text === 'log') {
//       arr.unshift({
//         message: log(),
//         type: text,
//         dateTime: new Date(),
//       });
//     } else if (text === undefined) {
//       return arr;
//     }
//     return arr;
//   }
//   return getRecords();
// }

// create arr
// create objects
// sort objects

// export function createLogger() {
//   const arr = [];
//   const objects = {
//     log(message){
//       arr.push({ message, type: 'log', dataTime: new Date() });
//     },
//     error(message) {
//       arr.push({ message, type: 'error', dataTime: new Date() });
//     },
//     warn(message) {
//       arr.push({ message, type: 'warn', dataTime: new Date() });
//     },
//     getRecords(type) {
//       const res = [];
//       if (!type) {
//         return [...arr].sort((a, b) => b.dataTime - a.dataTime);
//       }

//       for (const el of arr) {
//         if (el.type === type) {
//           res.unshift({...el});
//         }
//       }
//       return res.sort((a, b) => b.dataTime - a.dataTime);
//     },
//   };
//   return objects;
// }

// createLogger
// output obj with methods warn,error,log

// loggersArray - memory for methods
// {message: [saved message],dateTime:Date(),type:[warn or error or log]}

// methods
// getRecords
// input string (type of message warn,error,log)
// return message of that type {message: [saved message],dateTime:Date(),type:[warn or error or log]}
// if no input
// return all types

// sort all messages by time newest goes first
// if no messages by the type return empty array

const createLogger = () => {
  const arr = [];

  function warn(text) {
    arr.push({
      message: text,
      dateTime: new Date(),
      type: 'warn',
    });
  }
  function error(text) {
    arr.push({
      message: text,
      dateTime: new Date(),
      type: 'error',
    });
  }
  function log(text) {
    arr.push({
      message: text,
      dateTime: new Date(),
      type: 'log',
    });
  }

  // getRecords(typeOfMessage)
  function getRecords(type) {
    if (type !== undefined) {
      return arr
        .filter((el) => {
          if (el.type === type) {
            return el;
          }
        })
        .sort((a, b) => b.dateTime - a.dateTime);
    }
    return arr.sort((a, b) => b.dateTime - a.dateTime);
  }
  return {
    warn,
    error,
    log,
    getRecords,
  };
};

const logger = createLogger();
console.log(logger.log('User logged in'));
console.log(logger.warn('User try to restricted page'));
console.log(logger.log('User logged out'));
console.log(logger.error('Unexpected error on the site'));
console.log(logger.getRecords()); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User try to restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger.getRecords('log')); // [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger.getRecords('error')); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
console.log(logger.getRecords('warn')); // [{ message: 'User try to restricted page', type: 'warn', dateTime: Date }]
