const chalk = require('chalk');

const { getObject } = require('./get-objects-s3');
const { putObject } = require('./put-objects-s3');

async function getDeployLog({ Bucket, Key = 'deploy.log' } = {}) {

	try {
		const object = await getObject({ Bucket, Key })
		return JSON.parse(object.Body);
	} catch(e) {
		console.log(chalk.red(e));;
	}
}

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