const path = require('path');
const fs = require('fs');

const buildDir = path.join(process.cwd(), 'build');
const readDirectoryKeys = require('../read-directory-keys');
const createDirectoryObjects = require('../create-directory-objects');
const addContentLength = require('../add-content-length');

const files = addContentLength(createDirectoryObjects(readDirectoryKeys(buildDir)));

test('add content type key correctly', () => {
	expect(files[0]).toHaveProperty('ContentLength');
});

test('add content type value correctly', () => {
	expect(files[0]).toHaveProperty('ContentLength', fs.statSync(files[0].Key).size);
});