#!/urs/bin/env node

const chalk = require('chalk');
const { putDirectoryToS3, putDeployLog, getDirectoryFromS3 } = require('./lib/s3');
const { mergeDeployLog } = require('./lib/log');
const { createDirectoryStreams } = require('./lib/dir');
const { validateRelease, validateCredentials } = require('./deploy');

function validateResolutions(resolutions) {
	return resolutions;
}

async function deploy() {

	console.log(chalk.yellow('deploying your build to S3...'));

	try {
		const { AWS_SECRET_KEY, AWS_ID } = validateCredentials();
		const { Bucket, log, release, cwd } = await validateRelease();

		// get last deploy
		const oldContainers = await getDirectoryFromS3({
			Bucket,
			Prefix: 'current'
		});

		// put last deploy streams to S3 in new directory
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
		await consoleLogRelease(release);

	} catch(e) {
		console.log(chalk.red(e));		
	}
}

deploy();