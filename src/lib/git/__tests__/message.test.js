import message from '../message';

test('outputs git message name', () => {
  expect(typeof message()).toBe('string');
});
