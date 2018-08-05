require('dotenv').config({});
const run = require('../run');

function fourArgs(w, x, y, z) {
  return w * z - x * y;
}

function newError() {
  throw new Error('test error');
}

test('correctly curries variables', async () => {
  const result = await run(fourArgs, 2, 3, 5, 2);
  expect(result).toBe(fourArgs(2, 3, 5, 2));
});

// test('correctly errors', async () => {
//   const error = await run(newError);
//   // expect();
// });
