import generateNewRelease from '../generate-new-release';

const release = generateNewRelease();

test('generates obj', () => {
  expect(typeof release).toBe('object');
});

test('has date', () => {
  expect(release).toHaveProperty('date');
});

test('has date object', () => {
  expect(release.date instanceof Date).toBe(true);
});

test('has sha', () => {
  expect(release).toHaveProperty('sha');
});

test('has sha string', () => {
  expect(typeof release.sha).toBe('string');
});

test('has message', () => {
  expect(release).toHaveProperty('message');
});

test('has message string', () => {
  expect(typeof release.message).toBe('string');
});

test('has id', () => {
  expect(release).toHaveProperty('id');
});

test('has id string', () => {
  expect(typeof release.id).toBe('string');
});

test('has branch', () => {
  expect(release).toHaveProperty('branch');
});

test('has branch string', () => {
  expect(typeof release.branch).toBe('string');
});
