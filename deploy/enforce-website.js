const chalk = require('chalk');
const { putBucketWebsite, getBucketWebsite } = require('../lib/s3');

const config = {
	IndexDocument: { 
		Suffix: "index.html"
	},
	ErrorDocument: {
		Key: "index.html"
	},
	RoutingRules: []
}

async function enforceWebsite({ Bucket, WebsiteConfiguration = config } = {}) {

	try {
		console.log(WebsiteConfiguration);
		const response = await putBucketWebsite({ Bucket, WebsiteConfiguration });
		console.log(response);
		// return response
	} catch(e) {
		console.log(chalk.red(e));
	}
}

module.exports = enforceWebsite;