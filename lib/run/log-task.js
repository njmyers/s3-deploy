const chalk = require('chalk');

function formatTaskName(string) {
	const reg = /[a-z]+/gi;

	return string.replace(/([A-Z])/g, ' $1').toUpperCase();
}

function logTask(inputTask, state = 'working') {
	const task = formatTaskName(inputTask.name);
	const color = state === 'completed' ? 'green' : state === 'errored' ? 'red' : 'yellow';
	console.log(chalk[color](`TASK: ${task} => ${state}`));
}

module.exports = logTask;