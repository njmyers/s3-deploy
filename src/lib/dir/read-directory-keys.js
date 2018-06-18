import fs from 'fs';
import lodash from 'lodash';

const isFile = (file) => fs.statSync(file).isFile();

const readDirectoryKeys = (dir) => {
  const names = fs.readdirSync(dir);
  const files = names.map((name) => {
    const filePath = `${dir}/${name}`;
    return isFile(filePath) ? filePath : readDirectoryKeys(filePath);
  });

  return lodash.flatten(files);
};

/**
 * recursively read directory structure
 * @param  {string} dir directory to read
 * @return {array}     array of file paths
 */
// function readDirectoryKeys(dir) {
// 	try {
// 		const names = fs.readdirSync(dir);
// 		const files = names.map((name) => {
// 			const filePath = `${dir}/${name}`;
// 			if (isFile(filePath)) return filePath;
// 			else return readDirectoryKeys(filePath);
// 		});

// 		return lodash.flatten(files);
// 	} catch (e) {
// 		throw e;
// 	}
// }

export default readDirectoryKeys;
