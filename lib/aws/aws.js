const aws = require('aws-sdk');
const credentials = require('./validate-credentials')();

if (credentials) {
	const { AWS_SECRET_ACCESS_KEY, AWS_ACCESS_KEY_ID } = credentials;
	aws.Credentials({
		accessKeyId: AWS_ACCESS_KEY_ID,
		secretAccessKey: AWS_SECRET_ACCESS_KEY
	});
}

module.exports = aws;