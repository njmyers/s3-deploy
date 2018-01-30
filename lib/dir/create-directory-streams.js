const fs = require('fs');
const chalk = require('chalk');
const readDirectory = require('./read-directory');
const mime = require('mime-types');

/**
 * creates readable streams for all files in a directory
 * @param  {string} dir directory to read
 * @return {array}     an array of objects with filePath and streams
 */
function createDirectoryStreams(dir) {

	return readDirectory(dir).map((Key) => {
		console.log(Key);

		return {
			Key,
			Body: fs.createReadStream(Key),
			Metadata: mime.contentType(Key)
		};
	});
}

module.exports = createDirectoryStreams;