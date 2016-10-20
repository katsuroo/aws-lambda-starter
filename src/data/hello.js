'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /hello
 */
module.exports = {
    /**
     * summary: Random string
     * description: 
     * parameters: 
     * produces: 
     * responses: 200, default
     * operationId: hello
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/hello',
                operation: 'get',
                response: '200'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/hello',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
