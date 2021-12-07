const getDiff = (startDate, endDate) => {
  const result =
    startDate > endDate
      ? new Date(startDate - endDate) / 1000
      : new Date(endDate - startDate) / 1000;
  return `${Math.floor(result / 3600 / 24)}d ${
    Math.floor(result / 3600) % 24
  }h ${Math.floor(result / 60) % 60}m ${Math.floor(result) % 60}s`;
};

console.log(getDiff(new Date(2020, 2, 3, 7, 6), new Date(2021, 245, 3, 6, 7)));
