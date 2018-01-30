const chalk = require('chalk');
const { putBucketWebsite, getBucketWebsite } = require('../lib/s3');

async function enforceWebsite({ Bucket } = {}) {
	try {
		const response = await getBucketWebsite({ Bucket });
		console.log(response);
		// return response
	} catch(e) {
		console.log(chalk.red(e));
	}
}

module.exports = enforceWebsite;