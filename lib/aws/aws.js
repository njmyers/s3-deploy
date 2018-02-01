const aws = require('aws-sdk');

const credentials = require('./validate-credentials')();
const region = require('./validate-region')();

// merge options object
const options = { ...region, ...credentials };

if (Object.keys(options) > 0) aws.Config(options);

module.exports = aws;