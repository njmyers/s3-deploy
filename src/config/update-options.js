// @flow

const updateOptions = (option: {}, ...options: Array<{}>) => {
  if (!options.length) {
    return option;
  } else {
    const safeUpdated = {};
    Object.entries(options[0]).forEach((entry) => {
      const key = entry[0];
      const value = entry[1];

      if (value !== undefined) {
        safeUpdated[key] = value;
      }
    });

    return updateOptions({ ...option, ...safeUpdated }, ...options.slice(1));
  }
};

export default updateOptions;
