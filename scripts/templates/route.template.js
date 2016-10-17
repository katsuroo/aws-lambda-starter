const _ = require('lodash');

module.exports = function(routes) {
const route = _.reduce(routes, (result, config, path) => {
  
result = result + `
  '${path}': {
    method: '${config.method}',
    handler: '${config.handler}',
  },
`;
return result;
  
}, '');
  
return (
  
`/**
* Defines all routing paths for the service
*/

module.exports = {
${route}
};
`
);
};