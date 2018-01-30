const S3 = require('./s3');
const Promise = require('bluebird');

/**
 * create a promise for S3 putObject
 * @param  {string} options.Bucket Bucket name
 * @param  {string} options.Key    destination file path
 * @param  {stream} options.Body   binary stream
 * @return {promise}               return a promise
 */
function putObject({ Bucket, Key, Body, Metadata } ={}) {
	return new Promise((resolve, reject) => {
		S3.putObject({ Bucket, Key, Body, Metadata }, (err, data) => {
			if (err) reject(err);
			else resolve(data);
		})
	})
}

module.exports = putObject;