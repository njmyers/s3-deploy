import git from './git';
const message = git(['log', '-n', '1', '--pretty=format:%s']);
export default message;
