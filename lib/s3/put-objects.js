const putObject = require('./put-object');

function validateParams(Bucket, params) {
	const { Key, Body, ContentLength = '', CacheControl = '', ContentType = undefined } = params;

	return {
		Bucket,
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
		return putObject(validateParams(Bucket, params));
	});
}

module.exports = putObjects;