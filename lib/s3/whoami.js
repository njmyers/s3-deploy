const spawnSync = require('child_process').spawnSync;	

function removeNewLine(string) {
	if (typeof string === 'string') return string.replace(/\n/, '');
	else if (typeof string === undefined) return '';
	else return string;
}

function whoami() {
	return removeNewLine(spawnSync('whoami').stdout.toString());
}

module.exports = whoami;