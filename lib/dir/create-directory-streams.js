const fs = require('fs');
const chalk = require('chalk');
const readDirectory = require('./read-directory');

/**
 * creates readable streams for all files in a directory
 * @param  {string} dir directory to read
 * @return {array}     an array of objects with filePath and streams
 */
function createDirectoryStreams(dir) {

	return readDirectory(dir).map((Key) => {
		
		return {
			Key,
			Body: fs.createReadStream(Key)
		}
	});
}

module.exports = createDirectoryStreams