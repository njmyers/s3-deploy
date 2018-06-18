const CloudFront = require('./cloud-front');
const Promise = require('bluebird');

function createInvalidation(params = {}) {
  return new Promise((resolve, reject) => {
    CloudFront.createInvalidation(params, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

module.exports = createInvalidation;
