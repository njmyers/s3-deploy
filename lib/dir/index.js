const concatFilePaths = require('./concat-file-paths');
const createDirectoryStreams = require('./create-directory-streams');
const generateID = require('./generate-id');
const directoryReplacer = require('./directory-replacer')
const readDirectory = require('./read-directory');

module.exports = {
	concatFilePaths,
	createDirectoryStreams,
	generateID,
	directoryReplacer,
	readDirectory
}