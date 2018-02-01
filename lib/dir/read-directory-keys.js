const fs = require('fs');
const lodash = require('lodash');
const chalk = require('chalk');

function isFile(file) {
	return fs.statSync(file).isFile();
}

/**
 * recursively read directory structure
 * @param  {string} dir directory to read
 * @return {array}     array of file paths
 */
function readDirectoryKeys(dir) {
	try {
		const names = fs.readdirSync(dir);
		const files = names.map((name) => {
 			const filePath = `${dir}/${name}`;
			if (isFile(filePath)) return filePath;
			else return readDirectoryKeys(filePath)
		});

		return lodash.flatten(files);
	} catch(e) {
		console.log(chalk.red(e));;
	}

}

module.exports = readDirectoryKeys;