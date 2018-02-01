const { aws } = require('../aws');
const options = { apiVersion: '2006-03-01' }

module.exports = new aws.S3(options);