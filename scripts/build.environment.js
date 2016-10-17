/**
 * This is used to build application environment during CI
 */

const fs = require('fs');
const _  = require('lodash');
const env = process.env;

const EXTRACTION_LIST = [
  'AWS_ACCESS_KEY_ID',
  'AWS_SECRET_ACCESS_KEY'
];

const settings = EXTRACTION_LIST.reduce(
  (result, key) => {
    const val = env[key];
    return result = val ? result.concat(`${key}=${val}\n`) : result;
  },
  ''
);

if(!_.isEmpty(settings)) fs.writeFile('../.envsad', settings, 'utf8');