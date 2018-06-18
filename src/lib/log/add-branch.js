import { branch } from '../git';
const addBranch = (container) => ({ ...container, branch: branch() });
export default addBranch;
