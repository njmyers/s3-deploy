const { directoryReplacer } = require('../dir');

/**
 * replaces filenames to an array of S3 ready object streams
 * @param  {array} containers S3 ready object streams
 * @param  {string} directory  directory on S3 to put
 * @return {array}            array of objects with file names
 */
function rewriteFileKeys({ containers, dest = '', stub = '' } = {}) {

	return containers.map((container) => {

		return {
			Key: directoryReplacer(stub)(container.Key, dest),
			Body: container.Body
		}
	})
}

module.exports = rewriteFileKeys;