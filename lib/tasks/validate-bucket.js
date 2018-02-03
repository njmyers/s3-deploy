require('dotenv').config({});
const chalk = require('chalk');

function validateBucket() {
	const Bucket = process.env.S3_DEPLOY_BUCKET;
	
	if (!Bucket) {
		console.log(chalk.red(`Please specify an S3 bucket in your .env file`));
		console.log(chalk.red('S3_DEPLOY_BUCKET=mybucket'));
		process.exit();
	}

	else return Bucket;
}

module.exports = validateBucket;