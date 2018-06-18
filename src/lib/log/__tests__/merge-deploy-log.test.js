import fs from 'fs';
import path from 'path';
import mergeDeployLog from '../merge-deploy-log';
import generateNewRelease from '../generate-new-release';

const sampleLog = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'sample_deploy.log'), 'utf8')
);
const sampleRelease = generateNewRelease();

test('replaces new release correctly', () => {
  expect(mergeDeployLog(sampleLog, sampleRelease).current).toMatchObject(
    sampleRelease
  );
});

test('merges old release correctly', () => {
  expect(mergeDeployLog(sampleLog, sampleRelease).releases[0]).toMatchObject(
    sampleLog.current
  );
});
