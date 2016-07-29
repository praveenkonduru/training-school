module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
	  express: {
	    options: {
	      // Override defaults here 
	    },
	    dev: {
	      options: {
	        script: './app/server.js'
	      }
	    }
	},
	  karma: {
		  unit: {
		    configFile: 'trainingschool/tests/karma/config.js',
		    browsers: ['Chrome']
		  }
		}
	});

	grunt.registerTask('default',['karma:unit']);
};