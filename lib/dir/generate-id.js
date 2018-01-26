function generateID() {
	return Math.random().toString(16).slice(-6);
}

module.exports = generateID;