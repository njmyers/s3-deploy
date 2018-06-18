const removeNewLine = (string) =>
  typeof string === 'string' ? string.replace(/\n/, '') : '';
export default removeNewLine;
