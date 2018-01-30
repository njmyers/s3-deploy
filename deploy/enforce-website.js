const chalk = require('chalk');
const { putBucketWebsite, getBucketWebsite } = require('../lib/s3');

const config = {
	IndexDocument: { 
		Suffix: "index.html"
	},
	ErrorDocument: {
		Key: "index.html"
	}
}

async function enforceWebsite({ Bucket, WebsiteConfiguration = config } = {}) {

	try {
		const response = await putBucketWebsite({ Bucket, WebsiteConfiguration });
		return response
	} catch(e) {
		console.log(chalk.red(e));
	}
}

module.exports = enforceWebsite;