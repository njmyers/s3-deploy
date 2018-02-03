const chalk = require('chalk');

function logKeys(object) {
	for (let key in object) {
		console.log(chalk.green(`${key}:`, chalk.white(`${object[key]}`)));
	}

	// using \n creates two lines
	// don't want to add inside of loop
	console.log('')
}

module.exports = logKeys