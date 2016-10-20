const dataProvider = require('../data/hello.js');
/**
 * Operations on /hello
 */
module.exports = {
  /**
   * summary: Random string
   * responses: 200, default
   */
  get: function hello(req, res, next) {
    /**
     * Get the data for response 200
     * For response `default` status 200 is used.
     */
    const status = 200;
    const provider = dataProvider.get['200'];
    
    provider(req, res)
      .then(data => res.status(status).send(data && data.responses))
      .catch(err => next(err));
  },
  
};
