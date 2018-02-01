require('dotenv').config({});
const fs = require('fs');
const chalk = require('chalk');
const whoami = require('./whoami');

const globalPath = `/home/${whoami}/.aws/config`;

function logAWSDemo() {
	const configDemo =
		`[default]
		region = us-east-1
		output = json`

	console.log(chalk.yellow('AWS Global Config'));
	console.log(chalk.yellow(`add the following to ${globalPath}`));
	console.log(chalk.yellow(configDemo));
}

function logDotEnvDemo() {
	const dotEnvDemo = 
		`AWS_REGION=****`

	console.log(chalk.yellow('AWS Local Config'));
	console.log(chalk.yellow('add the following to .env in project root'));
	console.log(chalk.yellow(dotEnvDemo));
}

function validateAWSFolder() {
	const file = fs.readFileSync(globalPath).toString();
	const regex = /region/gi;

	return regex.test(file);
}

function validateDotEnv() {
	const AWS_REGION = process.env.AWS_REGION;
	if (AWS_REGION) {
		return {
			region: AWS_REGION
		};
	} else return {}
}

function validateRegion() {
	const region = validateDotEnv();
	
	if (Object.keys(region).length < 1) {
		const globalConfig = validateAWSFolder();
		if (!globalConfig) {
			console.log(chalk.red('no region found. please use one of following configurations before continuing'))
			logDotEnvDemo();
			logAWSDemo();
		} else {
			console.log(chalk.green(`region found in ${globalPath}`))
			return {};
		}
	} else {
		console.log(chalk.green('region found in .env file'))
		return region;
	}
}

module.exports = validateRegion;