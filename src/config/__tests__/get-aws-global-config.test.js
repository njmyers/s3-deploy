import { createLineRegex } from '../get-aws-global-config';
import getAWSGlobalConfig from '../get-aws-global-config';

describe('it gets the global config from ~/.aws', () => {
  test('the regex works correctly', () => {
    const string = 'region = place\nother = thing\nother_line = 1123123';
    const regionRegex = createLineRegex('region');

    expect(string.match(regionRegex)[0]).toBe('place');
  });

  test('it gets the global config', () => {
    expect(getAWSGlobalConfig()).toHaveProperty('secretAccessKey');
    expect(getAWSGlobalConfig()).toHaveProperty('region');
    expect(getAWSGlobalConfig()).toHaveProperty('accessKeyId');
  });
});
