const chalk = require('chalk');
const logTask = require('./log-task');

function run(task, ...args) {
  logTask(task, 'started');

  try {
    const result = task.call(null, ...args);
    logTask(task, 'completed');
    return result;
  } catch (e) {
    logTask(task, 'errored');
    console.log(chalk.whiteBright(e));
    console.log(chalk.white(e.stack));
    process.exit();
  }
}

module.exports = run;
