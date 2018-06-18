import updateOptions from '../update-options';

const option = {
  flag: true,
  prop: 'defaultValue',
};

describe('it correctly updates an options object with new values', () => {
  test('it updates correctly', () => {
    expect(updateOptions(option, { flag: false })).toMatchObject({
      prop: 'defaultValue',
      flag: false,
    });
  });

  test('it updates a series of options correctly (auto-curries)', () => {
    expect(
      updateOptions(option, { flag: false }, { prop: 'value' })
    ).toMatchObject({
      prop: 'value',
      flag: false,
    });
  });

  test('it ignores values marked undefined', () => {
    expect(
      updateOptions(option, { flag: undefined, prop: undefined })
    ).toMatchObject({
      prop: 'defaultValue',
      flag: true,
    });
  });
});
