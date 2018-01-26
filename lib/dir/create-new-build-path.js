const concatFilePaths = require('./concat-file-paths');
const removeBuild = require('./remove-build');

function createNewBuildPath(src, dest) {
	return concatFilePaths(dest, removeBuild(src))
}

module.exports = createNewBuildPath;