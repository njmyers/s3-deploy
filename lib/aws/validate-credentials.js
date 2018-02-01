require('dotenv').config({});
const fs = require('fs');
const chalk = require('chalk');
const whoami = require('./whoami');

const globalPath = `/home/${whoami}/.aws/credentials`;

function logAWSDemo() {
	const configDemo =
		`[default]
		aws_access_key_id = ****
		aws_secret_access_key = *****`

	console.log(chalk.yellow('AWS Global Config'));
	console.log(chalk.yellow(`add the following to ${globalPath}`));
	console.log(chalk.yellow(configDemo));
}

function logDotEnvDemo() {
	const dotEnvDemo = 
		`AWS_SECRET_ACCESS_KEY=****
		AWS_ACCESS_KEY_ID=****`

	console.log(chalk.yellow('AWS Local Config'));
	console.log(chalk.yellow('add the following to .env in project root'));
	console.log(chalk.yellow(dotEnvDemo));
}

function validateAWSFolder() {
	console.log(globalPath)
	const file = fs.readFileSync(globalPath).toString();
	const regex = /aws_access_key_id|aws_secret_access_key/gi;

	return regex.test(file);
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
			console.log(chalk.red('no credentials found. please use on of following configurations before continuing'))
			logDotEnvDemo();
			logAWSDemo();
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