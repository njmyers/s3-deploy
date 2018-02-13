const path = require('path');

const buildDir = path.join(process.cwd(), 'build');
const readDirectoryKeys = require('../read-directory-keys');
const createDirectoryObjects = require('../create-directory-objects');
const addCacheControl = require('../add-cache-control');

const files = addCacheControl(createDirectoryObjects(readDirectoryKeys(buildDir)));

test('add cache control key correctly', () => {
	expect(files[0]).toHaveProperty('CacheControl');
});

test('add cache control value correctly', () => {
	expect(files[0]).toHaveProperty('CacheControl', 'max-age=31536000');
});
