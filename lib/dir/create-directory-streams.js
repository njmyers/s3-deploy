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
		const mimeType = mime.lookup(Key);
		const charSet = mime.charSet(mimeType);

		return {
			Key,
			Body: fs.createReadStream(Key),
			Metadata: {
				'Content-Type': mimeType
			}
		};
	});
}

module.exports = createDirectoryStreams;