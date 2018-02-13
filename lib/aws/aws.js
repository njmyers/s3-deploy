const aws = require('aws-sdk');

const { runSync } = require('../run');

const validateCredentials = require('./validate-credentials');
const validateRegion = require('./validate-region');

const credentials = runSync(validateCredentials);
const region = runSync(validateRegion);

// merge options object
const options = { ...region, ...credentials };

// initialize options object if any
if (Object.keys(options) > 0) aws.Config(options);

module.exports = aws;
