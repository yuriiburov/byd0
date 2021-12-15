/* eslint-disable lines-around-directive */
/* eslint-disable strict */
'use strict';

/**
 * @param {number} count
 * @param {number} period
 * @return {undefined}
 */
const pinger = (count, period) => {
  let i = count;
  console.log('ping');
  const interval = setInterval(() => {
    // eslint-disable-next-line no-plusplus
    if (--i > 0) {
      console.log('ping');
    } else {
      clearInterval(interval);
    }
  }, period);
};

// examples
pinger(5, 1000); // makes 5 writes with 1000 ms interval
pinger(7, 1500); // makes 7 writes with 1500 ms interval
