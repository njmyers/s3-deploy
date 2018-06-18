import safeENV from '../safe-env';

process.env.TEST_STRING = 'string';
process.env.TEST_NUMBER = '99';
process.env.TEST_BOOLEAN = 'true';

describe('it safely grabs and coerces .env file values', () => {
  test('it correctly grabs an coerces string/number/boolean', () => {
    expect(safeENV('TEST_STRING')).toBe('string');
    expect(safeENV('TEST_NUMBER')).toBe(99);
    expect(safeENV('TEST_BOOLEAN')).toBe(true);
  });
});
