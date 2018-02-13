const chalk = require('chalk');
const logKeys = require('./log-keys');

function showLog(log) {
	console.log(chalk.yellow(`\ncurrent deploy\n`));
	logKeys(log.current);
	console.log(chalk.yellow(`\npast deploys\n`));
	log.releases.forEach((release) => logKeys(release));
}

module.exports = showLog;
