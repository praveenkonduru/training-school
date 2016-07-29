module.exports = function(config) {
  config.set({
  	plugins : [
    'karma-chrome-launcher',
    'karma-jasmine'
    ],
    port:8080,
    basePath: '../..',
    frameworks: ['jasmine'],
    files:['**/*.js','**/*spec.js']
  });
};