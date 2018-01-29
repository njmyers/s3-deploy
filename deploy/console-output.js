const chalk = require('chalk')

function consoleOutput(release) {
	console.log(chalk.yellow('successfully deployed release'));
	logKeys(release);
}

function logKeys(object) {
	for (let key in object) {
		console.log(chalk.yellow(`${key}: ${object[key]}`));
	}
}

module.exports = consoleOutput;