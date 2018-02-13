const fs = require('fs');
const chalk = require('chalk');

/**
 * creates readable streams for all files in a directory
 * @param  {string} dir directory to read
 * @return {array}     an array of objects with filePath and streams
 */
function createDirectoryStreams(containers) {
	return containers.map((container) => {
		return {
			...container,
			Body: fs.createReadStream(container.Key),
		};
	});
}

module.exports = createDirectoryStreams;
