const path = require('path');
const fs = require('fs');

const buildDir = path.join(process.cwd(), 'build');
const readDirectoryKeys = require('../read-directory-keys');

const files = readDirectoryKeys(buildDir);

test('reads paths correctly', () => {
	expect(typeof files[0]).toBe('string');
});

// test('add content type value correctly', () => {
// 	expect(files[0]).toHaveProperty('Key', fs.statSync(files[0].Key).size);
// });