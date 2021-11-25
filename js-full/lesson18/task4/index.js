function saveCalls(func) {
  const calls = [];
  return function withMemory(...props) {
    calls.push(props);
    withMemory.calls = calls;
    return func.call(this, props);
  };
}
function test(a, b) {
  return Math.sqrt(a * a + b * b);
}
const testWithMemory = saveCalls(test);
testWithMemory(4, 2);
console.log(testWithMemory.calls);
testWithMemory(9, 1);
console.log(testWithMemory.calls);
