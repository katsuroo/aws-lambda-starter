require('dotenv').config({path: './config/.env'});

const Promise = require('bluebird');
const fs      = Promise.promisifyAll(require('fs'));
const shell   = require('shelljs');

const version = process.env.VERSION;

fs.access('claudia.json', fs.F_OK, err => {
  
  if (err) shell.exec('npm run lambda:create');
  else shell.exec('npm run lambda:update');
  
});