const fs = require('fs');
const camelCase = require('camelcase');
const chalk = require('chalk');
const path = require('path');

function isFile(file) {
	return fs.statSync(file).isFile();
}

function readDirectory(dir) {
	try {
		const names = fs.readdirSync(dir);
		const files = names.map((name) => {
 			const filePath = `${dir}/${name}`;
			if (isFile(filePath) && name !== 'index.js') return name.substring(0, name.length - 3);
		});

		return files.filter((item) => item !== undefined);
	} catch(e) {
		console.log(chalk.red(e));;
	}
}

const files = readDirectory(__dirname);

files.forEach((each) => {
	module.exports[camelCase(each)] = require(path.join(__dirname, each));
});