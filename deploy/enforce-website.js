const chalk = require('chalk');
const { putBucketWebsite, getBucketWebsite } = require('../lib/s3');

const params = {
	IndexDocument: { Suffix: 'index.html' },
	ErrorDocument: { Key: 'index.html' },
	RoutingRules: [] }
}

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