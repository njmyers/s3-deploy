const S3 = require('./s3');
const Promise = require('bluebird');

function listObjects({ Bucket, Prefix } = {}) {
	return new Promise((resolve, reject) => {
		S3.listObjectsV2({ Bucket, Prefix }, (err, data) => {
			if (err) reject(err)
			else resolve(data)
		});
	});
}

module.exports = listObjects;