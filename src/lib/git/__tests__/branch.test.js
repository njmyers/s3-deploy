import branch from '../branch';

test('outputs git branch name', () => {
  expect(typeof branch()).toBe('string');
});
