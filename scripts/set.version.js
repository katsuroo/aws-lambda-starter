require('dotenv').config({path: './config/.env'});

const Promise = require('bluebird');
const fs      = Promise.promisifyAll(require('fs'));
const shell   = require('shelljs');

const version = process.argv[2];

fs.access('claudia.json', fs.F_OK, err => {

  if (!version) return console.error('Error: Version not provided');
  
  if (err) return console.error('Error: Claudia configuration does not exist');
  
  switch(version){

    case 'prod':
      shell.exec('npm run lambda:setProd');
      break;

    case 'dev':
      shell.exec('npm run lambda:setDev');
      break;

    case 'stage':
      shell.exec('npm run lambda:setStage');
      break;

    default:
      console.log('Invalid version');
      break;
  }
});