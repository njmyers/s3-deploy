const AWS = require('aws-sdk');
const CloudFront = new AWS.CloudFront({ apiVersion: '2017-03-25' });

module.exports = CloudFront;