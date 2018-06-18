// const { stripAllExceptKey } = require('../dir');
// const { putDirectoryToS3, deleteObjects, listObjects } = require('../s3');
// const flatten = require('lodash/flatten');

// function validatePut(put) {}

// function validateDelete(deleted) {}

// async function removeDeploys(Bucket, log, releases = 10) {

// 	try {
// 		const { releases } = log;

// 		// keep last 10 releases
// 		const deleteReleases = releases.slice(releases)
// 		const objects = deleteReleases.map(release => await listObjects(`releases/${release.id}`));
// 		const flattened = stripAllExceptKey(flatten(objects));

// 		const deleted = await deleteObjects({
// 			Bucket,
// 			Delete: {
// 				Objects: flattened,
// 			},
// 		});

// 		validateDelete(deleted);
// 	} catch (e) {
// 		throw e;
// 	}
// }

// module.exports = removeDeploys;
