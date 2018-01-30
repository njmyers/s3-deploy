const AWS = require('aws-sdk');
const S3 = new AWS.S3({ apiVersion: '2006-03-01' });
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