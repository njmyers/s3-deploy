const path = require('path');
const mime = require('mime-types');

const buildDir = path.join(process.cwd(), 'build');
const readDirectoryKeys = require('../read-directory-keys');
const createDirectoryObjects = require('../create-directory-objects');
const addContentType = require('../add-content-type');

const files = addContentType(createDirectoryObjects(readDirectoryKeys(buildDir)));

test('add content type key correctly', () => {
	expect(files[0]).toHaveProperty('ContentType');
});

test('add content type value correctly', () => {
	expect(files[0]).toHaveProperty('ContentType', mime.lookup(files[0].Key));
});
