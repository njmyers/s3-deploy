const chalk = require('chalk');
const getObjects = require('./get-objects');
const listObjects = require('./list-objects');

async function getDirectoryFromS3({ Bucket, Prefix = '' }) {
  try {
    const response = await listObjects({ Bucket, Prefix });
    const promises = await getObjects({
      Bucket,
      containers: response.Contents,
    });

    // resolve array of S3 promises
    const resolutions = [];

    for (let promise of promises) {
      const resolution = await promise;
      resolutions.push(resolution);
    }

    // Key back into Object
    const data = resolutions.map((obj, index) => {
      return {
        ...obj,
        Key: response.Contents[index].Key,
      };
    });

    return data;
  } catch (e) {
    throw e;
  }
}

module.exports = getDirectoryFromS3;
