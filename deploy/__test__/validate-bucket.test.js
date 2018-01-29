require('dotenv').config({});
const validateBucket = require('../validate-bucket');

const Bucket = process.env.S3_DEPLOY_BUCKET;

test('returns bucket correctly', () => {
	expect(validateBucket()).toBe(Bucket);
});