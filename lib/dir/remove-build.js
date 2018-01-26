function removeBuild(string) {
	const regex = /build\/+/gi;
	const split = string.split(regex)
	return split[split.length - 1];
}

module.exports = removeBuild;