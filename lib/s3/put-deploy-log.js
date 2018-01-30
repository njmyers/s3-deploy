const chalk = require('chalk');
const putObject = require('./put-object');

/**
 * puts the file with key deploy.log
 * @param  {string} options.Bucket Bucket name
 * @param  {stream} options.Body   Binary stream of data
 * @param  {string} options.Key    Optional key to rename 'deloy.log'
 * @return {object}                S3 resolution object
 */
async function putDeployLog({ Bucket, Body, Key = 'deploy.log' } = {}) {
	const Metadata = {
		'Content-Type': 'application/json'
	}

	try {
		const resolution = await putObject({ Bucket, Body, Key })
		return resolution;
	} catch(e) {
		console.log(chalk.red(e));;
	}
}

module.exports = putDeployLog;