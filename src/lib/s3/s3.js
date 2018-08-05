// const { aws } = require('../aws');
const options = { apiVersion: '2006-03-01' };

console.log('configure s3');

module.exports = new AWS.S3(options);
