const chalk = require('chalk');

function logTask(task, state) {

	switch(state) {
		case 'started':
			return console.log(chalk.yellow(`TASK: ${state}: ${task}`));
		case 'completed':
			return console.log(chalk.green(`TASK: ${state}: ${task}`));
		default:
			return console.log(chalk.yellow(`TASK: working: ${task}`));
	}
}

module.exports = logTask;