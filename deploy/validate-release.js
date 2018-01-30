const chalk = require('chalk');
const { generateNewRelease } = require('../lib/log');
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
			console.log(chalk.yellow('please commit your changes before deploying a new release.'));
			process.exit();
		} else {
			return { Bucket, log, release, cwd };
		}
	} catch(e) {
		console.log(chalk.red(e));
	}
}

module.exports = validateRelease;