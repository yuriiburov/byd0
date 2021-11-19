function run() {
  const a = 0;
  const c = 2;

  if (a === 1) {
    return c;
  }

  for (let i = 1; i < 10; i += 1) {
    console.log(i);
    return i;
  }
  const d = a;

  return d;
}

run();
