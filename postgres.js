const helper    = require('./src/util/helper');
const _         = require('lodash');
const Sequelize = require('sequelize');

const MODEL_PATH = 'src/models/**/*.js';

const env = process.env;

const config = {
  host   : env.DB_HOST,
  port   : env.DB_PORT,
  dialect: 'postgres'
};

const postgres = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASSWORD, config);

function initModel(files) {
  _.each(files, path => require('./' + path));
}

function init() {
  return postgres.authenticate()
                 .then(() => helper.getFile(MODEL_PATH))
                 .then(initModel)
                 .then(() => postgres.sync())
                 .catch(err => console.log(err));
}

module.exports = {
  init,
  postgres
};

