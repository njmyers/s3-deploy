// @flow
import dotenv from 'dotenv';
import coerceTypes from './coerce-types';
import { compose } from 'smalldash';

// initialize with options
dotenv.config();

/**
 * safely access the env variable
 * @param  {[type]} variable [description]
 * @return {[type]}          [description]
 */
const safeENV = (variable: string): string | void =>
  process.env[variable] ? process.env[variable] : undefined;

const coercedSafeENV: (string) => string | void = compose(
  coerceTypes,
  safeENV
);

export default coercedSafeENV;
