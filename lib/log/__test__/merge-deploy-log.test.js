const fs = require('fs');
const path = require('path');

const mergeDeployLog = require('../merge-deploy-log');
const generateNewRelease = require('../generate-new-release');

const sampleLog = JSON.parse(fs.readFileSync(path.join(__dirname, 'sample_deploy.log'), 'utf8'));
const sampleRelease = generateNewRelease();

test('replaces new release correctly', () => {
	expect(mergeDeployLog(sampleLog, sampleRelease).current).toMatchObject(sampleRelease);
});

test('merges old release correctly', () => {
	expect(mergeDeployLog(sampleLog, sampleRelease).releases[0]).toMatchObject(sampleLog.current);
});
