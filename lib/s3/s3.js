const AWS = require('aws-sdk');
const credentials = require('./validate-credentials')();
const version = { apiVersion: '2006-03-01' }

module.exports = !credentials ? new AWS.S3(version) : new AWS.S3(version);