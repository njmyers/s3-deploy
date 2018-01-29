const { getDeployLog } = require('../lib/s3');
const { generateNewRelease } = require('../lib/log');
const validateBucket = require('./validate-bucket');
const registerCWD = require('./register-cwd');

async function validateRelease() {
	const cwd = registerCWD();
	const Bucket = validateBucket();

	try {
		const log = await getDeployLog({ Bucket });
		const release = generateNewRelease();
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