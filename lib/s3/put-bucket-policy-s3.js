const S3 = require('./s3');
const Promise = require('bluebird');

function putBucketPolicy({ Bucket, Policy } ={}) {
	return new Promise((resolve, reject) => {
		S3.putBucketPolicy({ Bucket, Policy }, (err, data) => {
			if (err) reject(err);
			else resolve(data);
		})
	})
}

module.exports = putBucketPolicy;