const Promise  = require('bluebird');
const inquirer = require('inquirer');
const fs       = Promise.promisifyAll(require('fs'));

const modelTemplate = require('./templates/model.template');

const MODEL_PATH = './src/models';

const models = fs.readdirSync(MODEL_PATH);

const namePrompt = {
  name    : 'name',
  message : 'Enter model name',
  validate: name => {
    const exists = models.some(model => model.toLowerCase() === name.toLowerCase());
    
    return exists ? 'Model already exist' : true;
  }
};

function createModel(opt) {
  const modelFilePath = `${MODEL_PATH}/${opt.name}.model.js`;
  const model = modelTemplate(opt.name);
  
  return fs.writeFileAsync(modelFilePath, model);
}

inquirer
  .prompt([namePrompt])
  .then(createModel)
  .catch(err => console.error(err));
