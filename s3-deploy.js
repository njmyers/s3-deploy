#!/usr/bin/env node
'use strict';

const chalk = require('chalk');
const Promise = require('bluebird');

const { run } = require('./lib/run');
const { deploy, log } = require('./scripts');

const args = process.argv.slice(2);
const scripts = ['deploy', 'log', 'revert'];

function noScript() {
	console.log(chalk.red(`Error: ${args[0]} is not a valid script.`));
	console.log(
		chalk.whiteBright(
			`The following are available scripts ${scripts.reduce((a, b) => a + ', ' + b)}`
		)
	);
	process.exit();
}

async function controlFlow(args) {
	switch (args[0]) {
		case 'deploy':
			return await run(deploy, args);
		case 'log':
			return await run(log, args);
		case 'revert':
			return await run(log, args);
		default:
			return noScript();
	}
}

// execute like this so we can use return statement in async switch function
Promise.resolve(controlFlow(args)).catch((e) => console.log(chalk.red(e)));
