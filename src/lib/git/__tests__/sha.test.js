import sha from '../sha';

test('outputs git sha name', () => {
  expect(typeof sha()).toBe('string');
});
