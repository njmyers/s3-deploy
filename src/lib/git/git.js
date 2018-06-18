import { spawnSync } from 'child_process';
import removeNewLine from './remove-newline';

const git = (arg) => () =>
  removeNewLine(spawnSync('git', arg).stdout.toString());

export default git;
