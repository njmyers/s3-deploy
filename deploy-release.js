#!/urs/bin/env node

const chalk = require('chalk');
const { putDirectoryToS3, putDeployLog, getDirectoryFromS3 } = require('./lib/s3');
const { mergeDeployLog } = require('./lib/log');
const { createDirectoryStreams } = require('./lib/dir');
const { validateRelease, validateCredentials, logTask, consoleOutput, enforcePolicy, enforceWebsite } = require('./deploy');

function validateResolutions(resolutions) {
	return resolutions;
}

async function deploy() {

	console.log(chalk.yellow('deploying your build to S3...'));

	try {

		const { AWS_SECRET_KEY, AWS_ID } = validateCredentials();
		logTask('validating credentials', 'completed');

		logTask('validating release', 'starting');
		const { Bucket, log, release, cwd } = await validateRelease();
		logTask('validating release', 'completed');
		await enforceWebsite({ Bucket });

		logTask('archiving old deploy', 'starting');
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
		logTask('archiving old deploy', 'completed');

		// read build directory recursively & synchronously then creates readable streams
		logTask('reading build directory', 'starting');
		const containers = createDirectoryStreams(`${cwd}/build`);
		logTask('reading build directory', 'completed');

		// put streams to S3 and rename to current
		logTask('uploading current build', 'starting');
		const resolutions = await putDirectoryToS3({
			Bucket,
			containers,
			dest: 'current',
			stub: 'build'
		});
		validateResolutions(resolutions);
		logTask('uploading current build', 'completed');


		logTask('merging and uploading new log', 'starting');
		const newLog = mergeDeployLog(log, release);
		const resolution = await putDeployLog({
			Bucket,
			Body: JSON.stringify(newLog, null, 4)
		});
		logTask('merging and uploading new log', 'completed');

		validateResolutions(resolution);

		logTask('enforcing policy', 'starting');
		const policy = await enforcePolicy({ Bucket })
		
		consoleOutput(release);

	} catch(e) {
		console.log(chalk.red(e));		
	}
}

deploy();

const tasks = [
	{
		name: 'validate credentials',
		action: validateCredentials
	},
	{
		name: 'validate release',
		action: validateRelease
	},
	{
		name: 'another actions'
	}
]