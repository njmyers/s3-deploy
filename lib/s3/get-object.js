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

module.exports = getObject;