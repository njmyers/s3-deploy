const mime = require('mime-types');

function addContentType(containers) {
	return containers.map((container) => {
		return {
			...container,
			ContentType: mime.lookup(container.Key),
		};
	});
}

module.exports = addContentType;
