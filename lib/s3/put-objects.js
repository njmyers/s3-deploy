const putObject = require('./put-object');

function validateParams(params) {
	const { Key, Body, ContentLength = '', CacheControl = '', ContentType = undefined } = params;

	return {
		Key,
		Body,
		ContentLength,
		CacheControl,
		ContentType
	}
}

/**
 * S3 method to put an array of objects
 * @param  {string} Bucket     S3 bucket to use
 * @param  {array} containers array of objects containing S3 params
 * @return {array}            array of promises
 */
function putObjects({ Bucket, containers } = {}) {
	return containers.map((params) => {
		return putObject(validateParams(params));
	});
}

module.exports = putObjects;