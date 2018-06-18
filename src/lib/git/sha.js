import git from './git';
const sha = git(['rev-parse', 'HEAD']);
export default sha;
