require('dotenv').config({});
const fs = require('fs');
const chalk = require('chalk');
const whoami = require('./whoami');

const globalPath = `/home/${whoami}/.aws/config`;

function logAWSDemo() {
	const configDemo ='[default]\nregion = us-east-1\noutput = json\n'

	console.log(chalk.whiteBright('\nAWS Global Config'));
	console.log(chalk.whiteBright(`add the following to ${globalPath}`));
	console.log(chalk.white(configDemo));
}

function logDotEnvDemo() {
	const dotEnvDemo = 'AWS_REGION=****'

	console.log(chalk.whiteBright('\nAWS Local Config'));
	console.log(chalk.whiteBright('add the following to .env in project root'));
	console.log(chalk.white(dotEnvDemo));
}

function validateAWSFolder() {
	const exists = fs.existsSync(globalPath)
	if (!exists) return existss
	else {
		const file = fs.readFileSync(globalPath).toString();
		const regex = /region/gi;

		return regex.test(file);
	}
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
			logDotEnvDemo();
			logAWSDemo();
			throw new Error('no region found. please use one of the above configurations before continuing');
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