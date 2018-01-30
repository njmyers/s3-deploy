const chalk = require('chalk');

async function taskManager(tasks) {
	const state = {}

	for (let i = 0; i < tasks.length; i ++) {

	}
}

async function runTask(task) {
	try {
		console.log(chalk.yellow(`TASK: ${task} started`));
		const results = await task.action.call();
		console.log(chalk.yellow(`TASK: ${task} completed`));
		return results;
	} catch(e) {
		console.log(chalk.red(`TASK: ${task} failed`));
		console.log(chalk.red(e));
	}
}

module.exports = taskManager;