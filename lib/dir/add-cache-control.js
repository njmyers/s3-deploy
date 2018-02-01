const fs = require('fs');

function addCacheControl(containers) {

	return containers.map((container) => {
		const regex = /index.html|service-worker.js/gi;
		const CacheControl = regex.test(container.Key) ? 'max-age=0' : 'max-age=31536000';

		return {
			...container,
			CacheControl
		};
	});
}

module.exports = addCacheControl;
