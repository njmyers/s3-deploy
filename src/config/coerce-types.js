// @flow
import { compose } from 'smalldash';

/**
 * coerce real boolean from boolean strings (env variables)
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 */
export const coerceBoolean = (value: string | void) =>
  value !== 'true' && value !== 'false'
    ? value
    : value === 'true'
      ? true
      : false;

/**
 * coerce real number from number strings (env variables)
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 */
export const coerceNumber = (value: string | void) => {
  const digits = /\d/gi;
  return digits.test(value) ? Number(value) : value;
};

const coerceTypes: (string) => string | number | boolean = compose(
  coerceNumber,
  coerceBoolean
);

export default coerceTypes;
