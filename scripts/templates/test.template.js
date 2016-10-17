module.exports = function(handlerName) {
return (
  
`const assert  = require('chai').assert;
const handler = require('./${handlerName}.js');

describe('${handlerName} unit test', function() {

  it('exists', function() {
    assert.isOk(handler);
  });
  
});
`
  
);
};