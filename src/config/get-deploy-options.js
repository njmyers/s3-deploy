// @flow
import safeENV from './safe-env';
import updateOptions from './update-options';
import coerceTypes from './coerce-types';

type DeployOptions = {
  buildFolder?: string | void,
  force: boolean | void,
  silent: boolean | void,
  mime: boolean | void,
  cache: boolean | number | void,
  cacheIgnore?: Array<string> | void,
  keepDeploys: number | void,
};

type InlineOptions = {
  force: boolean,
  silent: boolean,
  mime: boolean,
  cache: boolean | number,
  cacheIgnore: Array<string>,
  keepDeploys: number,
};

const defaultOptions: DeployOptions = {
  buildFolder: 'build',
  force: false,
  silent: false,
  mime: true,
  cache: true,
  cacheIgnore: ['index.html', 'service-worker.js'],
  keepDeploys: 5,
};

/**
 * [deployOptions description]
 * @param  {[type]} env     passed through from commander
 * @param  {[type]} options passed through from commander
 * @return {[type]}         [description]
 */
const deployOptions = (env: string, options: InlineOptions): DeployOptions => {
  // get any env options
  const envOptions: DeployOptions = {
    buildFolder: safeENV('S3_DEPLOY_BUILD_FOLDER'),
    force: safeENV('S3_DEPLOY_FORCE'),
    silent: safeENV('S3_DEPLOY_SILENT'),
    mime: safeENV('S3_DEPLOY_MIME'),
    cache: safeENV('S3_DEPLOY_CACHE'),
    keepDeploys: safeENV('S3_KEEP_DEPLOYS'),
  };
  // get any inlineOptions
  const inlineOptions: DeployOptions = {
    buildFolder: env,
    force: coerceTypes(options.force),
    silent: coerceTypes(options.silent),
    mime: coerceTypes(options.mime),
    cache: coerceTypes(options.cache),
    cacheIgnore: options.cacheIgnore,
    keepDeploys: coerceTypes(options.keepDeploys),
  };
  // safe merge all options
  return updateOptions(defaultOptions, envOptions, inlineOptions);
};

export default deployOptions;
