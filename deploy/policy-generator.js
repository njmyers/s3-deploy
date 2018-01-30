function policyGenerator(Bucket) {
	return `{\"Version\":\"2012-10-17\",\"Statement\":[{\"Sid\":\"AddPerm\",\"Effect\":\"Allow\",\"Principal\":\"*\",\"Action\":\"s3:GetObject\",\"Resource\":\"arn:aws:s3:::${Bucket}/current/*\"}]}`
}

module.exports = policyGenerator;