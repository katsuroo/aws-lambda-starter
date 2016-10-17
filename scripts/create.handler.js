const Promise  = require('bluebird');
const inquirer = require('inquirer');
const fs       = Promise.promisifyAll(require('fs'));

const handlerTemplate = require('./templates/handler.template');
const testTemplate    = require('./templates/test.template');
const routeTemplate   = require('./templates/route.template');

const HANDLER_PATH = './src/handlers';
const ROUTE_PATH   = './src/handlers/routes';

const handlers = fs.readdirSync(HANDLER_PATH);

const routes   = require('../src/handlers/routes');

const namePrompt = {
  name    : 'name',
  message : 'Enter handler name',
  validate: name => {
    const exists = handlers.some(list => list.toLowerCase() === name.toLowerCase());
    
    return exists ? 'Handler already exist' : true;
  }
};

const routePrompt = {
  name    : 'route',
  message : 'Enter route',
  validate: path => {
    const exists = routes[path];
    
    return exists ? 'Route already exist' : true;
  }
};

const methodPrompt = {
  name   : 'method',
  type   : 'list',
  message: 'Select Method',
  choices: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH', 'ALL']
};

const folderPrompt = {
  name   : 'folder',
  message: 'Enter folder name'
};

const destinationPrompt = {
  name   : 'destination',
  type   : 'list',
  message: 'Set destination',
  choices: ['- New Folder -'].concat(handlers)
};

function createFolder(opt) {
  const folderExist = handlers.some(file => file === opt.destination);
  
  if (folderExist) return opt;
  
  if (opt.destination === '- New Folder -') {
    
    return inquirer.prompt([folderPrompt])
                   .then(input => opt.destination = input.folder)
                   .then(() => fs.mkdirAsync(`${HANDLER_PATH}/${opt.destination}`))
                   .then(() => opt);
  }
  
  return fs.mkdirAsync(opt.destination);
}

function createHandler(opt) {
  const handlerFilePath = `${HANDLER_PATH}/${opt.destination}/${opt.name}.js`;
  const testFilePath    = `${handlerFilePath.slice(0, -3)}.test.js`;
  
  const handler = handlerTemplate(opt.name);
  const test    = testTemplate(opt.name);
  
  return Promise.all([
    fs.writeFileAsync(handlerFilePath, handler),
    fs.writeFileAsync(testFilePath, test)
  ]);
}

function createRoutes(opt) {
  routes[opt.route] = {
    method : opt.method,
    handler: `./${opt.destination}/${opt.name}.js`
  };
  
  const content = routeTemplate(routes);
  
  return fs.writeFileAsync(`${ROUTE_PATH}.js`, content).then(() => opt)
}

inquirer
  .prompt([namePrompt, routePrompt, methodPrompt, destinationPrompt])
  .then(createFolder)
  .then(createRoutes)
  .then(createHandler)
  .catch(err => console.error(err));
