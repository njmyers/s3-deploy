/**
 * creates readable streams for all files in a directory
 * @param  {string} dir directory to read
 * @return {array}     an array of objects with filePath and streams
 */
function createDirectoryObjects(arr) {
	return arr.map((Key) => { 

		return { Key }
	});
}

module.exports = createDirectoryObjects;