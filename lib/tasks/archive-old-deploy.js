const { stripAllExceptKey } = require('../dir');
const { putDirectoryToS3, deleteObjects } = require('../s3');

function validatePut(put) {}

function validateDelete(deleted) {}

async function archiveOldDeploy(Bucket, current, id) {
	try {
		const archived = await putDirectoryToS3({
			Bucket,
			containers: current,
			dest: `releases/${id}`,
			stub: 'current',
		});

		validatePut(archived);

		const deleted = await deleteObjects({
			Bucket,
			Delete: {
				Objects: stripAllExceptKey(current),
			},
		});

		validateDelete(deleted);
	} catch (e) {
		throw e;
	}
}

module.exports = archiveOldDeploy;
