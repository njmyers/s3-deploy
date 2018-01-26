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
function readDirectory(dir) {
	try {
		const names = fs.readdirSync(dir);
		const files = names.map((name) => {
 			const filePath = `${dir}/${name}`;
			if (isFile(filePath)) return filePath;
			else return readDirectory(filePath)
		});

		return lodash.flatten(files);
	} catch(e) {
		console.log(chalk.red(e));;
	}

}

module.exports = readDirectory;