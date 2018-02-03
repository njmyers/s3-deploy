const chalk = require('chalk');
const { generateNewRelease } = require('../log');
const validateBucket = require('./validate-bucket');
const registerCWD = require('./register-cwd');
const validateLog = require('./validate-log');

async function validateRelease() {
	const cwd = registerCWD();
	const Bucket = validateBucket();
	const release = generateNewRelease();

	try {
		const log = await validateLog({ Bucket });
		if (release.sha === log.current.sha) {
			throw new Error('please commit your changes before deploying a new release.');
		} else {
			return { Bucket, log, release, cwd };
		}
	} catch(e) {
		console.log(chalk.red(e));
	}
}

module.exports = validateRelease;