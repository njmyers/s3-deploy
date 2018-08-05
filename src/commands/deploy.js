const { run, runSync } = require('../lib/run');

const {
  validateRelease,
  enforceBucketPolicy,
  enforceWebsitePolicy,
  readOldDeploy,
  archiveOldDeploy,
  readBuildDirectory,
  uploadCurrentBuild,
  uploadNewLog,
  logNewRelease,
} = require('../lib/tasks');

async function deploy(options) {
  try {
    // Get bucket name, remote log, current local directory and generate new release
    const { Bucket, log, release, cwd } = await run(validateRelease);

    // download current build as readable streams
    const current = await run(readOldDeploy, options.bucket);

    // if current build archive under log id number
    const archived =
      current.length > 0
        ? await run(archiveOldDeploy, options.bucket, current, log.current.id)
        : true;

    // read build directory (sync) recursively & then create readable streams & headers
    const containers = runSync(readBuildDirectory, cwd);

    // put streams to S3 and rename to current
    await run(uploadCurrentBuild, options.bucket, containers);

    // update log
    await run(uploadNewLog, options.bucket, log, release);

    // enforce bucket policy
    await run(enforceBucketPolicy, options.bucket);

    // enforce website policy on bucket
    await run(enforceWebsitePolicy, options.bucket);

    // ouptut release info
    await run(logNewRelease, release);
  } catch (e) {
    console.log(chalk.red(e));
  }
}

module.exports = deploy;
