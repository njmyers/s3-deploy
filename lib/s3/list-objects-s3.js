const AWS = require('aws-sdk');
const S3 = new AWS.S3({ apiVersion: '2006-03-01' });
const Promise = require('bluebird');

function listObjects({ Bucket, Prefix } = {}) {
	return new Promise((resolve, reject) => {
		S3.listObjects({ Bucket, }, (err, data) => {
			if (err) reject(err)
			else resolve(data)
		});
	});
}

module.exports = listObjects;