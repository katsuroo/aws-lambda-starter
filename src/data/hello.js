const mockgen = require('./mockgen.js');
const Promise = require('bluebird');

/**
 * Operations on /hello
 */
module.exports = {
  /**
   * summary: Random string
   * responses: 200, default
   */
  get: {
    200: (req, res) => ( // eslint-disable-line no-unused-vars, func-names
      /**
       * Using mock data generator module.
       * Replace this by actual data for the api.
       */
      
      new Promise((resolve, reject) => {
        mockgen().responses({
          path: '/hello',
          operation: 'get',
          response: '200',
        }, (err, data) => {
          if (err) reject(err);
          if (data) resolve(data);
        });
      })
    ),
    default: (req, res) => ( // eslint-disable-line no-unused-vars, func-names
      /**
       * Using mock data generator module.
       * Replace this by actual data for the api.
       */
      
      new Promise((resolve, reject) => {
        mockgen().responses({
          path: '/hello',
          operation: 'get',
          response: 'default',
        }, (err, data) => {
          if (err) reject(err);
          if (data) resolve(data);
        });
      })
    ),
    
  },
  
};
