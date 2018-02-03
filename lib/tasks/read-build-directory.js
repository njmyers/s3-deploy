const { readDirectory } = require('../dir');

function readBuildDirectory(cwd) {
	return readDirectory(`${cwd}/build`);
}

module.exports = readBuildDirectory;