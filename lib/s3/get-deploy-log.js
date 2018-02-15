const chalk = require('chalk');
const getObject = require('./get-object');
const listObjects = require('./list-objects');

/**
 * gets the file named deploy.log from a bucket
 * @param  {string} options.Bucket Bucket name
 * @param  {string} options.Key    Optional key to rename 'deploy.log'
 * @return {object}                Returns parsed JSON data
 */
async function getDeployLog({ Bucket, Key = 'deploy.log' } = {}) {
	try {
		// prevent no such object error in with sdk
		const response = await listObjects({ Bucket, Prefix: Key });
		if (!response.Contents.length <= 0) return JSON.stringify({});
		else {
			const object = await getObject({ Bucket, Key });
			return object.Body;
		}
	} catch (e) {
		throw e;
	}
}

module.exports = getDeployLog;
