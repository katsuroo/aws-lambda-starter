const app              = require('express')();
const _                = require('lodash');
const path             = require('path');
const bodyParser       = require('body-parser');
const Swaggerize       = require('swaggerize-express');
const lambdaMiddleware = require('aws-serverless-express/middleware');

app.use(lambdaMiddleware.eventContext());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(Swaggerize({
  api     : path.resolve('./config/swagger.yaml'),
  handlers: path.resolve('./src/handlers')
}));

module.exports = app;