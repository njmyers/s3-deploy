const { getDeployLog, putDeployLog } = require('./deploy-log');
const { getObject, getObjects } = require('./get-objects-s3');
const { putObject, putObjects } = require('./put-objects-s3');

module.exports = {
	getObjects,
	getObject,
	putObjects,
	putObject,
	getDeployLog,
	putDeployLog
}