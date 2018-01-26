const git = require('../git');
const generateID = require('../dir/generate-id');

function generateNewRelease() {
	const sha = git.SHA();
	const branch = git.branch();
	const date = new Date().toString();
	const message = git.message();
	const id = generateID();

	return { date, sha, branch, message, id };
}

module.exports = generateNewRelease;