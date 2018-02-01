const lodash = require('lodash');

const readDirectoryKeys = require('./read-directory-keys');
const createDirectoryObjects = require('./create-directory-objects');
const createDirectoryStreams = require('./create-directory-streams');
const addCacheControl = require('./add-cache-control');
const addContentType = require('./add-content-type');
const addContentLength = require('./add-content-length');

// How do I do this with lodash?
function readDirectory(dir) {
	return addContentLength(addCacheControl(addContentType(createDirectoryStreams(createDirectoryObjects(readDirectoryKeys(dir))))));
}

module.exports = readDirectory;