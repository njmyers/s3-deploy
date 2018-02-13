const git = require('../git');
const { generateId } = require('../dir');

function generateNewRelease() {
	const sha = git.SHA();
	const branch = git.branch();
	const date = new Date().toString();
	const message = git.message();
	const id = generateId();

	return { date, sha, branch, message, id };
}

module.exports = generateNewRelease;
