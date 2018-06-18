import removeNewLine from '../remove-newline';

const string = 'this is a string\n';
const expected = 'this is a string';

test('remove newline', () => {
  expect(removeNewLine(string)).toBe(expected);
});

test('return empty string on bad argument', () => {
  expect(removeNewLine(undefined)).toBe('');
});
