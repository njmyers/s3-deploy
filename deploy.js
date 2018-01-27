#!/urs/bin/env node

require('dotenv').config({});
const chalk = require('chalk');
const { getDeployLog, putDirectoryToS3, putDeployLog, getDirectoryFromS3 } = require('./lib/s3');
const { mergeDeployLog, generateNewRelease } = require('./lib/log');
const { createDirectoryStreams } = require('./lib/dir');

function consoleLogRelease(release) {
	console.log(chalk.yellow('successfully deployed release'));
	logKeys(release);
}

function logKeys(object) {
	for (let key in object) {
		console.log(chalk.yellow(`${key}: ${object[key]}`));
	}
}

function validateResolutions(resolutions) {
	return resolutions;
}

function validateBucket() {
	const Bucket = process.env.S3_DEPLOY_BUCKET;
	const __projectdir = process.cwd();
	
	if (!Bucket) {
		console.log(chalk.red(`Please specify an S3 bucket in your .env file`));
		console.log(chalk.red('S3_DEPLOY_BUCKET=mybucket'));
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

		// get last deploy
		const oldContainers = await getDirectoryFromS3({
			Bucket,
			Prefix: 'current'
		});

		// put last deply streams to S3 in new directory
		const resolve = await putDirectoryToS3({
			Bucket,
			containers: oldContainers,
			dest: `releases/${release.id}`,
			stub: 'current'
		});

		// read build directory recursively & synchronously then creates readable streams
		const containers = createDirectoryStreams('./build');

		// put streams to S3 and rename to current
		const resolutions = await putDirectoryToS3({
			Bucket,
			containers,
			dest: 'current',
			stub: 'build'
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