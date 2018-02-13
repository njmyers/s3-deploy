function stripAllExceptKey(containers) {
	return containers.map((container) => {
		return {
			Key: container.Key,
		};
	});
}

module.exports = stripAllExceptKey;
