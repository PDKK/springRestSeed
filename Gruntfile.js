module.exports = function(grunt) {
	grunt.initConfig({
		bower: {
	    install: {
          options: {
        targetDir: './public/lib',
        layout: 'byType',
        install: true,
	        verbose: false,
	        cleanTargetDir: false,
		        cleanBowerDir: false,
		        bowerOptions: {}
      }
	       }
	    }	     
	});

	grunt.loadNpmTasks('grunt-bower-task');
	grunt.registerTask('default', ['bower']);
}
