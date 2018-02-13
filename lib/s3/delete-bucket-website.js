const S3 = require('./s3');
const Promise = require('bluebird');

function deleteBucketWebsite({ Bucket } = {}) {
	return new Promise((resolve, reject) => {
		S3.deleteBucketWebsite({ Bucket }, (err, data) => {
			if (err) reject(err);
			else resolve(data);
		});
	});
}

module.exports = deleteBucketWebsite;
