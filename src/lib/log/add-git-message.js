import { message } from '../git';
const addGitMessage = (container) => ({ ...container, message: message() });
export default addGitMessage;
