const chalk = require('chalk');
const { deleteBucketWebsite } = require('../lib/s3');

const config = {
	IndexDocument: { 
		Suffix: "index.html"
	},
	ErrorDocument: {
		Key: "index.html"
	}
}

async function enforceWebsite({ Bucket } = {}) {

	try {
		const response = await deleteBucketWebsite({ Bucket });
		return response
	} catch(e) {
		console.log(chalk.red(e));
	}
}

module.exports = enforceWebsite;