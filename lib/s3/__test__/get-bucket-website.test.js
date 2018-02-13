require('dotenv').config({});
const getBucketWebsite = require('../get-bucket-website');

const Bucket = process.env.S3_DEPLOY_BUCKET;

// test('get bucket website configuration', async () => {
// 	const config = await getBucketWebsite({ Bucket });
// 	expect(config).toBe('NoSuchWebsiteConfiguration: The specified bucket does not have a website configuration');
// });
