/* eslint-env node */
var here = require('kcd-common-tools/utils/here');

module.exports = function(originalConfig) {
  delete originalConfig.output.libraryTarget;
  delete originalConfig.externals;
  originalConfig.context = here('app');
  originalConfig.output.filename = 'dist/bundle.js';
  return originalConfig;
};
