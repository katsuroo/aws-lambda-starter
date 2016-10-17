const routes           = require('./src/handlers/routes');
const app              = require('express')();
const _                = require('lodash');
const lambdaMiddleware = require('aws-serverless-express/middleware');
const bodyParser       = require('body-parser');

function initializeRoutes() {
  _.each(routes, (config, path) => {
    
    const method  = config.method.toLowerCase();
    const handler = require(`./src/handlers/${config.handler}`);
    
    app[method](path, handler);
  });
}

initializeRoutes();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(lambdaMiddleware.eventContext());

module.exports = app;