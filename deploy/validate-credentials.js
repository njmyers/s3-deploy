require('dotenv').config({});
const chalk = require('chalk');

function validateCredentials() {
	const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;
	const AWS_ID = process.env.AWS_ID;
	
	if (!AWS_ID || !AWS_SECRET_KEY) {
		console.log(chalk.red(`You have not specified an AWS_SECRET_KEY or AWS_ID in your .env file`));
		console.log(chalk.red('Please ensure that you have credentials in your ~/.aws folder'));
		console.log(chalk.yellow('continuing without .env credentials'));

		return {
			AWS_SECRET_KEY: null,
			AWS_ID: null
		};
	} else {
		console.log(chalk.yellow('credentials found in .env file'))
		return { AWS_SECRET_KEY, AWS_ID };
	}
}

module.exports = validateCredentials;