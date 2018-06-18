import { sha } from '../git';
const addSha = (container) => ({ ...container, sha: sha() });
export default addSha;
