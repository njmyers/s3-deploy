import coerceTypes from '../coerce-types';

describe('it coerces string values into appropriate types', () => {
  test('it coerces true/false into correct boolean', () => {
    expect(coerceTypes('false')).toBe(false);
    expect(coerceTypes('true')).toBe(true);
  });

  test('it coerces positive numbers as string into correct number', () => {
    expect(coerceTypes('999')).toBe(999);
    expect(coerceTypes(0)).toBe(0);
  });

  test("it doesn't coerce other string values", () => {
    expect(coerceTypes('string')).toBe('string');
    expect(coerceTypes('undefined')).toBe('undefined');
    expect(coerceTypes('null')).toBe('null');
  });

  test('it passes through (unaffected) types besides string', () => {
    expect(coerceTypes(1000)).toBe(1000);
    expect(coerceTypes(false)).toBe(false);
    expect(coerceTypes(true)).toBe(true);
    expect(coerceTypes(undefined)).toBe(undefined);
    expect(coerceTypes(null)).toBe(null);
    expect(coerceTypes(['thing'])).toMatchObject(['thing']);
    expect(coerceTypes({ prop: 'value' })).toMatchObject({ prop: 'value' });
  });
});
