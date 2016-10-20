const promise = require('bluebird');
const glob    = promise.promisify(require('glob').Glob);

module.exports = {
  getFile: glob,
};