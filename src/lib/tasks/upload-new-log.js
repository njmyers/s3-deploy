const { mergeDeployLog } = require('../log');
const { putDeployLog } = require('../s3');

async function uploadNewLog(Bucket, log, release) {
  try {
    const newLog = mergeDeployLog(log, release);
    const resolution = await putDeployLog({
      Bucket,
      Body: JSON.stringify(newLog, null, 4),
    });
  } catch (e) {
    throw e;
  }
}

module.exports = uploadNewLog;
