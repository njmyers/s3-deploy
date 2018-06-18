const S3 = require('./s3');
const Promise = require('bluebird');

function putBucketWebsite({ Bucket, WebsiteConfiguration } = {}) {
  return new Promise((resolve, reject) => {
    S3.putBucketWebsite({ Bucket, WebsiteConfiguration }, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

module.exports = putBucketWebsite;
