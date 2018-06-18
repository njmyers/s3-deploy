// @flow
import path from 'path';
import fs from 'fs';

const packageJSON = (): {} => {
  const packagePath = path.join(process.cwd(), 'package.json');
  const file = fs.readFileSync(packagePath, 'utf8');
  return JSON.parse(file);
};

export default packageJSON;
