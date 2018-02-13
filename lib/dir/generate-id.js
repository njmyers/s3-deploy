function generateID() {
	return Math.random()
		.toString(16)
		.slice(-8);
}

module.exports = generateID;
