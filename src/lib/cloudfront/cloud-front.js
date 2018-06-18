const AWS = require('../aws');
const options = { apiVersion: '2017-03-25' };

module.exports = new AWS.CloudFront(options);
