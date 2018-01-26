const generateNewRelease = require('../generate-new-release');

test('generates obj', () => {
	console.log(generateNewRelease());
	expect(typeof generateNewRelease()).toBe('object');
});