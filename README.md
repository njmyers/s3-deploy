# S3 Deploy CLI

How is this different then AWS CLI? It's built specifically for your react and JS project :)

You can install this CLI using your favorite package manager

`npm install --save-dev s3-deloy`
`yarn add -dev s3-deloy`

Personally I prefer to use the script locally but you can use it globally as well!

## Options

All of the options are definable in 3 ways.

1.  ENV file
2.  s3-deploy.json
3.  Inline with CLI flags

In addition to the above methods. Your AWS credentials can also be set using the aws configure utility which creates a folder in your home folder at `~/.aws` For more information on this configuration refer to the [AWS CLI documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html#cli-quick-configuration)

All flags use the same key structure simply adopted for the syntax of the format. JSON keys use [camelCase](https://danielmiessler.com/blog/a-list-of-different-case-types/) so to define your secretAccessKey (NOT RECCOMENDED) in the JSON file you would use the following

```json
{
  "secretAccessKey": "key"
}
```

The same value in your .env file is simply prefixed with S3_DEPLOY and uses (SNAKE_CASE)[https://danielmiessler.com/blog/a-list-of-different-case-types/]

```env
S3_SECRET_ACCESS_KEY=key
```

And lastly if you would like to specify inline you can use cli options syntax

```
--secret-access-key key
```

The reccomended configuration is to put your AWS variables in your .env file and add all other options in your s3-deploy.json file.

\*\*\*note
For options that support arrays, .env syntax does not support arrays so you must use .json if you want to define an array. For inline cli usages arrays follow the format `value,value,value` with no spaces so to define cache values inline to ignore in the cli you would use `--cache-ignore file,file,file`

These are the options and there defaults which will work perfectly for your react application from create-react-application

```js
const options = {
  // the s3 bucket name of array of buckets
  bucket?: string | Array<string>,
  // AWS secret access key
  secretAccessKey: string | void,
  // AWS access key id
  accessKeyId: string | void,
  // AWS region
  region: string | void,
  // build folder
  buildFolder?: string | void,
  // ignore all warnings
  force: boolean | void,
  // no console output
  silent: boolean | void,
  // add mime types to files
  mime: boolean | void,
  // add cache control headers to files
  cache: boolean | number | void,
  // ignore and do not add cache control headers
  cacheIgnore?: Array<string> | void,
  // how many deploys to keep
  keepDeploys: number // defaults to 5
};
```

### Deploy Flow

- Get Deploy Log
- Move current deploy to new folder /releases/${current.id}
- Move new release to build folder
- Update Log with new entry (git sha and id)
- Put new Log

### Log flow

- Get log
- Display log

### Revert flow

- Get Deploy log
- Move current deploy to new folder/releases/${current.id}
- Move revert back to current
- update log wit new entry
