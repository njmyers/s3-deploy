const chalk = require('chalk');
const { putBucketWebsite, getBucketWebsite } = require('../lib/s3');

async function enforceWebsite({ Bucket } = {}) {
	const WebsiteConfiguration = {
		IndexDocument: { 
			Suffix: 'index.html'
		},
		ErrorDocument: {
			Key: 'index.html'
		},
		RoutingRules: []
	}

	try {
		const response = await putBucketWebsite({ Bucket, WebsiteConfiguration });
		console.log(response);
		// return response
	} catch(e) {
		console.log(chalk.red(e));
	}
}

module.exports = enforceWebsite;