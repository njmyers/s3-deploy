require('dotenv').config({});
const chalk = require('chalk');
const AWS = require('aws-sdk');
const S3 = new AWS.S3({apiVersion: '2006-03-01'});
const Promise = require('bluebird');

function getObject({ Bucket, Key } = {}) {
	return new Promise((resolve, reject) => {
		S3.getObject({ Bucket, Key }, (err, data) => {
			if (err) reject(err)
			else resolve(data)
		});
	});
}

/**
 * S3 method to put an array of objects
 * @param  {string} Bucket     S3 bucket to use
 * @param  {array} containers array of objects containing Key and Body
 * @return {array}            array of promises
 */
function getObjects(Bucket, containers) {
	return containers.map((container) => {
		const { Key } = container;
		return getObjects({ Bucket, Key });
	});
}

module.exports = { getObject, getObjects }