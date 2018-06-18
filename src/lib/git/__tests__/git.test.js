import git from '../git';

test('git with command is a function', () => {
  expect(typeof git(['branch'])).toBe('function');
});
