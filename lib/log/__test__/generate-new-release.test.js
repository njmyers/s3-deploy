const generateNewRelease = require('../generate-new-release');

test('generates obj', () => {
	expect(typeof generateNewRelease()).toBe('object');
});
