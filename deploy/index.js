const consoleOutput = require('./console-output');
const registerCWD = require('./register-cwd');
const validateBucket = require('./validate-bucket');
const validateRelease = require('./validate-release');
const validateCredentials = require('./validate-credentials');

module.exports = {
	consoleOutput,
	registerCWD,
	validateRelease,
	validateBucket,
	validateCredentials
}