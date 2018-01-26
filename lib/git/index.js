const spawn = require('child_process').spawnSync;

function git(arg)  {
	const git = spawn('git', arg);
	return removeNewLine(git.stdout.toString());
}

function removeNewLine(string) {
	if (typeof string === 'string') return string.replace(/\n/, '');
	else if (typeof string === undefined) return '';
	else return string;
}

const SHA = git.bind(null, ['rev-parse', 'HEAD']);
const branch = git.bind(null, ['branch']);
const message = git.bind(null, ['log', '-n', '1', '--pretty=format:%s']);

module.exports = {
	SHA,
	branch,
	message
}