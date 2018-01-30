const S3 = require('./s3');
const Promise = require('bluebird');

function getBucketWebsite({ Bucket, Policy } ={}) {
	return new Promise((resolve, reject) => {
		S3.getBucketWebsite({ Bucket, Policy }, (err, data) => {
			if (err) reject(err);
			else resolve(data);
		})
	})
}

module.exports = getBucketWebsite;