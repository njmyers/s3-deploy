const { deleteBucketWebsite } = require('../s3');

const config = {
	IndexDocument: { 
		Suffix: "index.html"
	},
	ErrorDocument: {
		Key: "index.html"
	}
}

async function enforceWebsitePolicy(Bucket) {

	try {
		const response = await deleteBucketWebsite({ Bucket });
		return response
	} catch(e) {
		throw e;
	}
}

module.exports = enforceWebsitePolicy;