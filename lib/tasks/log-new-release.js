const chalk = require('chalk')

function logKeys(object) {
	for (let key in object) {
		console.log(chalk.green(`${key}: ${object[key]}`));
	}
}

function logNewRelease(release) {
	console.log(chalk.yellow(`successfully deployed release id ${release.id} to S3!\n`));
	logKeys(release);
}


module.exports = logNewRelease;