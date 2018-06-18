const chalk = require('chalk');
const { generateNewRelease } = require('../log');
const validateBucket = require('./validate-bucket');
const registerCWD = require('./register-cwd');
const validateLog = require('./validate-log');
const { run, runSync } = require('../run');

async function validateRelease() {
  const cwd = runSync(registerCWD);
  const Bucket = runSync(validateBucket);
  const release = runSync(generateNewRelease);

  try {
    const log = await run(validateLog, Bucket);
    if (release.sha === log.current.sha) {
      throw new Error(
        'please commit your changes before deploying a new release.'
      );
    } else {
      return { Bucket, log, release, cwd };
    }
  } catch (e) {
    throw e;
  }
}

module.exports = validateRelease;
