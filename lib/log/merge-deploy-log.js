function mergeDeployLog(log, current) {
	const releases = [log.current, ...log.releases];
	return { current, releases };
}

module.exports = mergeDeployLog;
