const { getDirectoryFromS3 } = require('../s3');

async function readOldDeploy(Bucket) {
	try { 
		const current = await getDirectoryFromS3({
			Bucket,
			Prefix: 'current'
		});

		return current
	} catch(e) {
		throw e;
	}
}