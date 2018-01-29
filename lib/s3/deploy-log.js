const chalk = require('chalk');

const { getObject } = require('./get-objects-s3');
const { putObject } = require('./put-objects-s3');

/**
 * gets the file named deploy.log from a bucket
 * @param  {string} options.Bucket Bucket name
 * @param  {string} options.Key    Optional key to rename 'deploy.log'
 * @return {object}                Returns parsed JSON data
 */
async function getDeployLog({ Bucket, Key = 'deploy.log' } = {}) {

	try {
		const object = await getObject({ Bucket, Key })
		return JSON.parse(object.Body);
	} catch(e) {
		console.log(chalk.red(e));;
	}
}

/**
 * puts the file with key deploy.log
 * @param  {string} options.Bucket Bucket name
 * @param  {stream} options.Body   Binary stream of data
 * @param  {string} options.Key    Optional key to rename 'deloy.log'
 * @return {object}                S3 resolution object
 */
async function putDeployLog({ Bucket, Body, Key = 'deploy.log' } = {}) {

	try {
		const resolution = await putObject({ Bucket, Body, Key })
		return resolution;
	} catch(e) {
		console.log(chalk.red(e));;
	}
}

module.exports = {
	getDeployLog,
	putDeployLog
};