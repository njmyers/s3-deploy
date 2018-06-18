// @flow
import fs from 'fs';
import path from 'path';
import safeENV from './safe-env';

import type { GlobalOptions } from './global-options';

// access the home folder for the current env
const home: string = safeENV('HOME');
// get paths to default AWS-CLI config files
const credentialPath: string = path.resolve(home, '.aws/credentials');
const configPath: string = path.resolve(home, '.aws/config');

/**
 * Validates whether or not a path exists and returns a boolean
 * @param  {[type]} path [description]
 * @return {[type]}      [description]
 */
export const validatePath = (path: string): boolean =>
  fs.statSync(path).isFile();

/**
 * Creates a regex to find a property value on a line in a file string
 * Format of the values is like so
 * property = value
 * another_property = value
 * @param  {[type]} property [description]
 * @return {[type]}          [description]
 */
export const createLineRegex = (property: string): RegExp => {
  const string = `(?<=${property}\\s?=\\s?)([\\w\\-]+)`;
  return new RegExp(string, 'mgi');
};

/**
 * Gets the property value from the file path
 * @param  {[type]} item [description]
 * @param  {[type]} path [description]
 * @return {[type]}      [description]
 */
export const getPropertyValue = (item: string, path: string): string | void => {
  if (validatePath(path)) {
    const file = fs.readFileSync(path).toString();
    const matches: Array<string> = file.match(createLineRegex(item));
    return matches.length > 0 ? matches[0] : undefined;
  } else {
    return undefined;
  }
};

/**
 * Returns a global config.
 * All properties will be returned with value = undefined if it doesn't exist
 * @return {[type]} [description]
 */
const getAWSGlobalConfig = (): GlobalOptions => ({
  accessKeyId: getPropertyValue('aws_access_key_id', credentialPath),
  secretAccessKey: getPropertyValue('aws_secret_access_key', credentialPath),
  region: getPropertyValue('region', configPath),
});

export default getAWSGlobalConfig;
