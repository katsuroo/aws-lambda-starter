const _ = require('lodash');

module.exports = function (modelName) {

const name = _.upperFirst(modelName);
  
return (
    
`const Sequelize = require('sequelize');
const postgres = require('../../postgres').postgres;

const ${name} = {
  name: {
    type: Sequelize.STRING
  }
};

module.exports = ${name};`
  
);
};