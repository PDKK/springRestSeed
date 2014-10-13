module.exports = function(grunt) {
    grunt.initConfig({
	    bower: {
            install: {
                options: {
                    targetDir: './client/lib',
                    layout: 'byType',
                    install: true,
	                verbose: false,
	                cleanTargetDir: false,
		            cleanBowerDir: false,
		            bowerOptions: {}
                }
	       }
	    },
	    copy: {
	        main: {
		    cwd: 'client',
		    expand: true, 
		    src: ['**/*'], 
		    dest: 'public/'
	        }
	    }
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-bower-task');
	grunt.registerTask('default', ['bower', 'copy']);
}
