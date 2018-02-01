require('dotenv').config({});
const fs = require('fs');
const chalk = require('chalk');
const whoami = require('./whoami')();

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
		`AWS_SECRET_KEY=****
		AWS_ID=****`

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
	const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;
	const AWS_ID = process.env.AWS_ID;	

	if (AWS_ID && AWS_SECRET_KEY) return { AWS_SECRET_KEY, AWS_ID };
	else return null;
}

function validateCredentials() {
	const credentials = validateDotEnv();
	
	if (!credentials) {
		const globalConfig = validateAWSFolder();
		if (!globalConfig) {
			console.log(chalk.red('no credentials found'))
		} else {
			console.log(chalk.yellow(`credentials found in ${globalPath}`))
			return undefined;
		}
	} else {
		console.log(chalk.yellow('credentials found in .env file'))
		return { AWS_SECRET_KEY, AWS_ID };
	}
}

module.exports = validateCredentials;