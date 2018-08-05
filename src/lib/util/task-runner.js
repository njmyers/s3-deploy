const taskRunner = (sideEffect) => (task) => async (...args) => {
  sideEffect(task, 'started');

  try {
    const result = await Promise.resolve(task(...args));
    sideEffect(task, 'completed');
    return result;
  } catch (e) {
    sideEffect(task, 'errored', e);
  }
};

export default taskRunner;
