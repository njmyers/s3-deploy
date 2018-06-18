require('dotenv').config({});
const chalk = require('chalk');

function validateBucket() {
  const Bucket = process.env.S3_DEPLOY_BUCKET;

  if (!Bucket)
    throw new Error(
      'Please specify an S3 bucket in your .env file S3_DEPLOY_BUCKET=mydeploybucket'
    );
  else return Bucket;
}

module.exports = validateBucket;
