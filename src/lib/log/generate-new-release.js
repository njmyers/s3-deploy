import { compose } from 'smalldash';

import addBranch from './add-branch';
import addDate from './add-date';
import addGitMessage from './add-git-message';
import addId from './add-id';
import addSha from './add-sha';

const generateNewRelease = (obj = {}) =>
  compose(
    addSha,
    addBranch,
    addDate,
    addGitMessage,
    addId
  )(obj);

export default generateNewRelease;
