const chalk = require('chalk');
const { putBucketPolicy } = require('../lib/s3');
const policyGenerator = require('./policy-generator');

async function enforcePolicy({ Bucket } = {}) {
	const Policy = policyGenerator(Bucket);

	try {
		const response = await putBucketPolicy({ Bucket, Policy });
		return response
	} catch(e) {
		console.log(chalk.red(e));
	}
}

module.exports = enforcePolicy;