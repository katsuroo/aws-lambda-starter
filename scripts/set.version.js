require('dotenv').config({path: './config/.env'});

const Promise = require('bluebird');
const fs      = Promise.promisifyAll(require('fs'));
const shell   = require('shelljs');

const version = process.argv[2];

fs.access('claudia.json', fs.F_OK, err => {

  if (!version) return console.error('Error: Version not provided');
  
  if (err) return console.error('Error: Claudia configuration does not exist');
  
  shell.exec(`npm run lambda:setversion ${version}`);
});