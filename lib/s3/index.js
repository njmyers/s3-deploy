const { getDeployLog, putDeployLog } = require('./deploy-log');
const { getObject, getObjects } = require('./get-objects-s3');
const { putObject, putObjects } = require('./put-objects-s3');
const putBucketPolicy = require('./put-bucket-policy-s3');
const getDirectoryFromS3 = require('./get-directory-from-s3');
const putDirectoryToS3 = require('./put-directory-to-s3');
const rewriteFileKeys = require('./rewrite-file-keys');

module.exports = {
	putBucketPolicy,
	getObjects,
	getObject,
	putObjects,
	putObject,
	getDeployLog,
	putDeployLog,
	getDirectoryFromS3,
	putDirectoryToS3,
	rewriteFileKeys
}