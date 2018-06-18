import { generateId } from '../dir';
const addId = (container) => ({ ...container, id: generateId() });
export default addId;
