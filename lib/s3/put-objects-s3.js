const AWS = require('aws-sdk');
const S3 = new AWS.S3({apiVersion: '2006-03-01'});
const Promise = require('bluebird');

/**
 * create a promise for S3 putObject
 * @param  {string} options.Bucket Bucket name
 * @param  {string} options.Key    destination file path
 * @param  {stream} options.Body   binary stream
 * @return {promise}               return a promise
 */
function putObject({ Bucket, Key, Body } ={}) {
	return new Promise((resolve, reject) => {
		S3.putObject({ Bucket, Key, Body }, (err, data) => {
			if (err) reject(err);
			else resolve(data);
		})
	})
}

/**
 * S3 method to put an array of objects
 * @param  {string} Bucket     S3 bucket to use
 * @param  {array} containers array of objects containing Key and Body
 * @return {array}            array of promises
 */
function putObjects({ Bucket, containers }) {
	return containers.map((container) => {
		const { Key, Body } = container;
		return putObject({ Bucket, Key,	Body});
	});
}

module.exports = { putObject, putObjects }