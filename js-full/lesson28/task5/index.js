const shoment = (date) => {
  const newDate = new Date(date.getTime());
  return {
    add(value, number) {
      if (value === 'years') {
        newDate.setFullYear(newDate.getFullYear() + number);
      } else if (value === 'days') {
        newDate.setDate(newDate.getDate() + number);
      } else if (value === 'hours') {
        newDate.setHours(newDate.getHours() + number);
      } else if (value === 'minutes') {
        newDate.setMinutes(newDate.getMinutes() + number);
      } else if (value === 'seconds') {
        newDate.setSeconds(newDate.getSeconds() + number);
      } else if (value === 'milliseconds') {
        newDate.setMilliseconds(newDate.getMilliseconds() + number);
      }
      return this;
    },
    subtract(value, number) {
      if (value === 'years') {
        newDate.setFullYear(newDate.getFullYear() - number);
      } else if (value === 'days') {
        newDate.setDate(newDate.getDate() - number);
      } else if (value === 'hours') {
        newDate.setHours(newDate.getHours() - number);
      } else if (value === 'minutes') {
        newDate.setMinutes(newDate.getMinutes() - number);
      } else if (value === 'seconds') {
        newDate.setSeconds(newDate.getSeconds() - number);
      } else if (value === 'milliseconds') {
        newDate.setMilliseconds(newDate.getMilliseconds() - number);
      }
      return this;
    },
    result() {
      return newDate;
    },
  };
};

// console.log(shoment(new Date()));
const result = shoment(new Date(2020, 0, 7, 17, 17, 17))
  .add('minutes', 2)
  .add('days', 8)
  .subtract('years', 1)
  .result(); // ... Jan 15 2019 17:19:17 ...

console.log(result);
