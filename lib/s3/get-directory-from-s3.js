const chalk = require('chalk');
const { getObjects } = require('./get-objects-s3');
const listObjects = require('./list-objects-s3');

async function getDirectoryFromS3({ Bucket, Prefix = '' }) {
	try {
		const responses = await listObjects({ Bucket, Prefix });
		const promises = await getObjects({ 
			Bucket,
			containers: responses.Contents 
		});

		// resolve array of S3 promises
		const resolutions = [];

		for (let promise of promises) {
			const resolution = await promise
			resolutions.push(resolution);
		}

		// Key back into Object
		const data = resolutions.map((obj, index) => {
			return {
				...obj,
				Key: responses.Contents[index].Key
			}
		})

		return data;
	} catch(e) {
		console.log(chalk.red(e));
	}
}

module.exports = getDirectoryFromS3;