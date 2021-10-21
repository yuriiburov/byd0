// put your code here

const sum = (from, to) => from + to;

function compareSums(a, b, c, d) {
  if (sum(a, b) > sum(c, d)) {
    return true;
  }
  return false;
}
