require('dotenv').config({});
const fs = require('fs');
const chalk = require('chalk');
const whoami = require('./whoami');

const globalPath = `/home/${whoami}/.aws/credentials`;

function logAWSDemo() {
	const configDemo = '[default]\naws_access_key_id = ****\naws_secret_access_key = *****\n'

	console.log(chalk.whiteBright('\nAWS Global Credentials'));
	console.log(chalk.whiteBright(`add the following to ${globalPath}`));
	console.log(chalk.white(configDemo));
}

function logDotEnvDemo() {
	const dotEnvDemo = 'AWS_SECRET_ACCESS_KEY=****\nAWS_ACCESS_KEY_ID=****';

	console.log(chalk.whiteBright('\nAWS Local Credentials'));
	console.log(chalk.whiteBright('add the following to .env in project root'));
	console.log(chalk.white(dotEnvDemo));
}

function validateAWSFolder() {
	const exists = fs.existsSync(globalPath)
	if (!exists) return exists
	else {
		const file = fs.readFileSync(globalPath).toString();
		const regex = /aws_access_key_id|aws_secret_access_key/gi;

		return regex.test(file);
	}

}

function validateDotEnv() {
	const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
	const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;	

	if (AWS_ACCESS_KEY_ID && AWS_SECRET_ACCESS_KEY) {
		return { 
			accessKeyId: AWS_SECRET_ACCESS_KEY,
			secretAccessKey: AWS_ACCESS_KEY_ID
		};
	} else return {};
}

function validateCredentials() {
	const credentials = validateDotEnv();
	
	if (Object.keys(credentials).length < 2) {
		const globalConfig = validateAWSFolder();
		if (!globalConfig) {
			logDotEnvDemo();
			logAWSDemo();
			throw new Error('no credentials found. please use one of above configurations before continuing');
		} else {
			console.log(chalk.green(`credentials found in ${globalPath}`))
			return {};
		}
	} else {
		console.log(chalk.green('credentials found in .env file'))
		return credentials;
	}
}

module.exports = validateCredentials;