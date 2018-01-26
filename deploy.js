#!/urs/bin/env node

require('dotenv').config({});
const chalk = require('chalk');
const { getDeployLog, putDirectoryToS3, putDeployLog } = require('./lib/s3');
const { mergeDeployLog, generateNewRelease } = require('./lib/log');

function consoleLogRelease(release) {
	console.log(chalk.yellow('successfully deployed release'))
	logKeys(release);
}

function logKeys(object) {
	for (let key of object) {
		console.log(chalk.yellow(`${key}: ${object[key]}`));
	}
}

function validateUpload(resolutions) {
	return resolutions;
}

function validateBucket() {
	const Bucket = process.env.S3_DEPLOY_BUCKET;
	const __projectdir = process.cwd();
	
	if (!Bucket) {
		console.log(chalk.red(`Please specify an S3 bucket in your .env file`))
		console.log(chalk.red('S3_DEPLOY_BUCKET=mybucket'))
		process.exit();
	}

	else return Bucket;
}

async function validateRelease() {
	const Bucket = validateBucket();

	try {
		const log = await getDeployLog({ Bucket });
		const release = generateNewRelease();
		if (release.sha === log.current.sha) {
			console.log(chalk.yellow('please commit your changes before deploying a new release.'));
			process.exit();
		} else {
			return { Bucket, log, release };
		}
	} catch(e) {
		console.log(chalk.red(e));
	}
}

async function deploy() {

	try {
		const { Bucket, log, release } = await validateRelease();

		const resolutions = await putDirectoryToS3({
			Bucket,
			src: '../build',
			dest: 'current'
		});

		validateResolutions(resolutions);

		const newLog = mergeDeployLog(log, release);
		const resolution = await putDeployLog({
			Bucket,
			Body: JSON.stringify(newLog)
		});

		validateResolutions(resolution);
		consoleLogRelease(release);

	} catch(e) {
		console.log(chalk.red(e));		
	}
}

deploy();