const chalk = require('chalk');
const { putBucketPolicy } = require('../s3');
const policyGenerator = require('./policy-generator');

async function enforceBucketPolicy(Bucket, Policy = undefined) {

	// enforce default policy
	const Policy = !Policy ? policyGenerator(Bucket) : Policy;

	try {
		const response = await putBucketPolicy({ Bucket, Policy });
		return response;
	} catch(e) {
		throw e;
	}
}

module.exports = enforceBucketPolicy;