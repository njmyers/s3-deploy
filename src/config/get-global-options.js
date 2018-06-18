// @flow
import dotenv from 'dotenv';
import appRoot from 'app-root-path';
import aws from 'aws-sdk';

import getAWSGlobalConfig from './get-aws-global-config';
import safeENV from './safe-env';
import updateOptions from './update-options';
import coerceTypes from './coerce-types';
dotenv.config();

export type GlobalOptions = {
  bucket?: string | Array<string>,
  secretAccessKey: string | void,
  accessKeyId: string | void,
  region: string | void,
  appRoot?: string,
};

const defaultOptions = {
  bucket: undefined,
  secretAccessKey: undefined,
  accessKeyId: undefined,
  region: 'us-east-1',
  // add app root to global config object
  appRoot,
};

const globalOptions = (env: string, options: GlobalOptions): GlobalOptions => {
  const globalConfig: GlobalOptions = getAWSGlobalConfig();

  const envOptions: GlobalOptions = {
    bucket: safeENV('S3_DEPLOY_BUCKET'),
    secretAccessKey: safeENV('S3_SECRET_ACCESS_KEY'),
    accessKeyId: safeENV('S3_ACCESS_KEY_ID'),
    region: safeENV('S3_REGION'),
    appRoot: safeENV('S3_APP_ROOT'),
  };

  const inlineOptions: GlobalOptions = {
    bucket: coerceTypes(options.bucket),
    secretAccessKey: coerceTypes(options.secretAccessKey),
    accessKeyId: coerceTypes(options.accessKeyId),
    region: coerceTypes(options.region),
    appRoot: coerceTypes(options.appRoot),
  };

  const configuration: GlobalOptions = updateOptions(
    defaultOptions,
    globalConfig,
    envOptions,
    inlineOptions
  );

  const credentials = {
    secretAccessKey: configuration.secretAccessKey,
    accessKeyId: configuration.accessKeyId,
  };

  const region = configuration.region;

  const instance = new aws.Config({ credentials, region });

  return configuration;
};

export default globalOptions;
