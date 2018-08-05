const chalk = require('chalk');

const { run, runSync } = require('../lib/run');

const { validateBucket, validateLog, showLog } = require('../lib/tasks');

async function log() {
  try {
    // get bucket name
    const Bucket = runSync(validateBucket);

    // get log
    const log = await run(validateLog, Bucket);

    // show log in console
    showLog(log, Bucket);
  } catch (e) {
    console.log(chalk.red(e));
  }
}

module.exports = log;
