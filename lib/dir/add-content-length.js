const fs = require('fs');

function addContentLength(containers) {
	return containers.map((container) => {
		return {
			...container,
			ContentLength: fs.statSync(container.Key).size,
		};
	});
}

module.exports = addContentLength;
