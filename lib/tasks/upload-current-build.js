const { putDirectoryToS3 } = require('../s3');

function validatePut() {}

async function uploadCurrentBuild(Bucket, containers) {
	try {
		const resolutions = await putDirectoryToS3({
			Bucket,
			containers,
			dest: 'current',
			stub: 'build',
		});

		validatePut(resolutions);
	} catch (e) {
		throw e;
	}
}

module.exports = uploadCurrentBuild;
