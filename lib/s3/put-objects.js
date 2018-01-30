const putObject = require('./put-object');

/**
 * S3 method to put an array of objects
 * @param  {string} Bucket     S3 bucket to use
 * @param  {array} containers array of objects containing Key and Body
 * @return {array}            array of promises
 */
function putObjects({ Bucket, containers }) {
	return containers.map((container) => {
		const { Key, Body, Metadata } = container;
		return putObject({ Bucket, Key,	Body, Metadata });
	});
}

module.exports = putObjects;