import fs from 'fs';

const addContentStream = (container) => ({
  ...container,
  Body: fs.createReadStream(container.Key),
});

export default addContentStream;
