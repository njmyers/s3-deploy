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
		Body = fs.createReadStream(Key),
		ContentType = mime.lookup(Key),
		ContentLength = fs.statSync(Key).size

		return {
			Key,
			Body,
			ContentType,
			ContentLength 
		};
	});
}

module.exports = createDirectoryStreams;