const createNewBuildPaths = require('../dir/createNewBuildPaths');

/**
 * adds filenames to an array of S3 ready object streams
 * @param  {array} containers S3 ready object streams
 * @param  {string} directory  directory on S3 to put
 * @return {array}            array of objects with file names
 */
function appendFileNames(containers, dest = '') {

	return containers.map((container) => {

		return {
			Key: createNewBuildPaths(container.Key, dest),
			Body: container.Body
		}
	})
}

module.exports = appendFileNames