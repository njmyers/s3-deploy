const createNewBuildPath = require('../create-new-build-path');
const generateID = require('../generate-id');

const id = generateID();

const startPath = './build/static/style.css'
const newCurrentPath = 'current/static/style.css'
const oldReleasesPath = `releases/${id}/static/style.css`;

test('creates new current path', () => {
	expect(createNewBuildPath(startPath, 'current')).toBe(newCurrentPath);
});


test('creates new releases path', () => {
	expect(createNewBuildPath(startPath, `releases/${id}`)).toBe(oldReleasesPath);
});