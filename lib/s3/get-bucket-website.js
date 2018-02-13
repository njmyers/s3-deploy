const S3 = require('./s3');
const Promise = require('bluebird');

function getBucketWebsite({ Bucket } = {}) {
	return new Promise((resolve, reject) => {
		S3.getBucketWebsite({ Bucket }, (err, data) => {
			if (err) reject(err);
			else resolve(data);
		});
	});
}

module.exports = getBucketWebsite;
