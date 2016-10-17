require('dotenv').config({path: './config/.env'});

const expressRouter = require('aws-serverless-express');
const postgres      = require('./postgres').init();
const app           = require('./express');
const server        = expressRouter.createServer(app);

exports.init = (event, context) => expressRouter.proxy(server, event, context);