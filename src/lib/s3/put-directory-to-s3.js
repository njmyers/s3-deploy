const chalk = require('chalk');
const { rewriteFileKeys } = require('../dir');
const putObjects = require('./put-objects');

/**
 * puts directory to location on S3 Bucket
 * @param  {string} options.Bucket S3 Bucket name
 * @param  {string} options.src    src directory
 * @param  {string} options.dest   destination directory
 * @return {array}                 array of resolutions
 */
async function putDirectoryToS3({
  Bucket,
  containers,
  dest = '',
  stub = '',
} = {}) {
  try {
    // rename keys to S3 formatted destination Keys
    const renamed = rewriteFileKeys({
      containers,
      stub,
      dest,
    });

    // put Objects
    const promises = await putObjects({
      Bucket,
      containers: renamed,
    });

    // resolve array of S3 promises
    const resolutions = [];
    for (let promise of promises) {
      const resolution = await promise;
      resolutions.push(resolution);
    }

    return resolutions;
  } catch (e) {
    throw e;
  }
}

module.exports = putDirectoryToS3;
