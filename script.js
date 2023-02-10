console.log('start')
const foo = eval(`
  const c = 10;
  (a, b) => a + b + c;
  `)
console.log(foo(2, 3))