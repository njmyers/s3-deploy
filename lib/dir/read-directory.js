const fp = require('lodash/fp');

const readDirectoryKeys = require('./read-directory-keys');
const createDirectoryObjects = require('./create-directory-objects');
const createDirectoryStreams = require('./create-directory-streams');
const addCacheControl = require('./add-cache-control');
const addContentType = require('./add-content-type');
const addContentLength = require('./add-content-length');

module.exports = fp.compose(
	addContentLength,
	addCacheControl,
	addContentType,
	createDirectoryStreams,
	createDirectoryObjects,
	readDirectoryKeys
);
