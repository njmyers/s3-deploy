const removeBuild = require('../remove-build');

const relativePath = './build/something/path';
const fullPath = '/home/developer/documents/blog/build/something/path';
const garbagePath = '/home//////developer///documents/build////build////something/path';
const expectedPath = 'something/path';

test('remove build from relative file path', () => {
	expect(removeBuild(relativePath)).toBe(expectedPath);
});

test('remove build from full file path', () => {
	expect(removeBuild(fullPath)).toBe(expectedPath);
});

test('remove build from non file path', () => {
	expect(removeBuild(garbagePath)).toBe(expectedPath);
});