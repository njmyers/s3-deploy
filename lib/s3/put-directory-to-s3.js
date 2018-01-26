const chalk = require('chalk');
const appendFileNames = require('./append');
const createDirectoryStreams = require('../dir/create-directory-streams');

/**
 * puts directory to location on S3 Bucket
 * @param  {string} options.Bucket S3 Bucket name
 * @param  {string} options.src    src directory
 * @param  {string} options.dest   destination directory
 * @return {array}                 array of resolutions
 */
async function putDirectoryToS3({ Bucket, src, dest = '' } = {}) {

	try {

		// reads directory recursively & synchronously then creates readable streams
		const containers = createDirectoryStreams(src);

		// rename keys to S3 formatted destination Keys
		const renamed = appendFileNames(containers, dest);

		// put Objects
		const promises = putObjects(Bucket, renamed);

		// resolve array of S3 promises
		const resolutions = []
		for (let promise of promises) {
			const resolution = await promise
			resolutions.push(resolution);
		}

		return resolutions;
	} catch(e) {
		console.log(chalk.red(e));;
	}
}

module.exports = putDirectoryToS3;
