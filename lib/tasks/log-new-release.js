const chalk = require('chalk')
const logKeys = require('./log-keys');

function showLog(release) {
	console.log(chalk.yellow(`\nsuccessfully deployed release id ${release.id} to S3!\n`));
	logKeys(release);
}

module.exports = showLog;