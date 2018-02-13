const chalk = require('chalk');
const getObject = require('./get-object');

/**
 * gets the file named deploy.log from a bucket
 * @param  {string} options.Bucket Bucket name
 * @param  {string} options.Key    Optional key to rename 'deploy.log'
 * @return {object}                Returns parsed JSON data
 */
async function getDeployLog({ Bucket, Key = 'deploy.log' } = {}) {
	try {
		const object = await getObject({ Bucket, Key });
		return object.Body;
	} catch (e) {
		throw e;
	}
}

module.exports = getDeployLog;
