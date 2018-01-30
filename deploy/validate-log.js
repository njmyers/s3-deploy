const chalk = require('chalk');
const { getDeployLog } = require('../lib/s3');

async function validateLog({ Bucket } = {}) {
	try {
		const data = await getDeployLog({ Bucket });
		const json = validateJSON(data);

		const current = typeof json.current === 'object' ? json.current : {};
		const releases = Array.isArray(json.releases) ? json.releases : [];

		return { current, releases }
	} catch(e) {
		console.log(chalk.red(e));
	}
}

function validateJSON(data) {
	try {
		const json = JSON.parse(data)		
		return json
	} catch(e) {
		return {};
	}
}

module.exports = validateLog;
