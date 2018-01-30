const S3 = require('./s3');
const Promise = require('bluebird');

/**
 * manually constructed promise for S3.getObject
 * @param  {string} options.Bucket  Bucket name
 * @param  {string} options.Key     File key name
 * @return {Promise}                Promise
 */
function getObject({ Bucket, Key } = {}) {
	return new Promise((resolve, reject) => {
		S3.getObject({ Bucket, Key }, (err, data) => {
			if (err) reject(err)
			else resolve(data)
		});
	});
}

/**
 * S3 method to put an array of objects
 * @param  {string} Bucket     S3 bucket to use
 * @param  {array} containers  array of objects containing Key and Body
 * @return {array}             array of promises
 */
function getObjects({ Bucket, containers } = {}) {
	return containers.map((container) => {
		const { Key } = container;
		return getObject({ Bucket, Key });
	});
}

module.exports = { getObject, getObjects }