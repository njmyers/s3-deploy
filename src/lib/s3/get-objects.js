const getObject = require('./get-object');

/**
 * S3 method to put an array of objects
 * @param  {string} Bucket     S3 bucket to use
 * @param  {array} containers  array of objects containing Key and Body
 * @return {array}             array of promises
 */
function getObjects({ Bucket, containers } = {}) {
  return containers.map((container) => {
    const { Key } = container;
    return getObject({ Bucket, Key });
  });
}

module.exports = getObjects;
