'use strict';

module.exports = function (grunt) {
	var modernizr = 'bower_components/modernizr/modernizr.js';
	var jsFiles = [
		'bower_components/jquery/jquery.min.js',
		'bower_components/retina.js/src/retina.js',
		'bower_components/knockout.js/knockout.js',
		'bower_components/foundation/js/foundation/foundation.js',
		'assets/js/app.js'
	];

	var cssFiles = [
		'assets/css/app.css'
	];

	grunt.initConfig({
		uglify: {
			dist: {
				files: {
					'assets/js/modernizr.min.js': modernizr,
					'assets/js/app.min.js': jsFiles
				}
			},
			deploy: {
				files: {
					'www/assets/js/modernizr.min.js': modernizr,
					'www/assets/js/app.min.js': jsFiles
				}
			},
			dev: {
				options: {
					beautify: {
						width: 80,
						beautify: true
					}
				},
				files: {
					'assets/js/app.min.js': jsFiles
				}
			}
		},
		sass: {
			dist: {
				files: {
					'assets/css/app.css': 'src/app.scss'
				}
			},
			deploy: {
				files: {
					'www/assets/css/app.css': 'src/app.scss'
				}
			}
		},
		jade: {
			dist: {
				options: {
					data: {
						modernizr: 'assets/js/modernizr.min.js',
						js: ['assets/js/app.min.js'],
						css: ['assets/css/app.css']
					}
				},
				files: {
					'index.html': ['src/index.jade']
				}
			},
			deploy: {
				options: {
					data: {
						modernizr: 'assets/js/modernizr.min.js',
						js: ['assets/js/app.min.js'],
						css: ['assets/css/app.css']
					}
				},
				files: {
					'www/index.html': ['src/index.jade']
				}
			},
			dev: {
				options: {
					data: {
						modernizr: modernizr,
						js: jsFiles,
						css: ['assets/css/app.css']
					}
				},
				files: {
					'index.html': ['src/index.jade']
				}
			}
		},
		copy: {
			dev: {
				files: [
					{src: ['src/*.js'], dest: 'assets/js/', filter: 'isFile'},
					{src: ['src/img/*'], dest: 'assets/img/', filter: 'isFile'}
				]
			},
			deploy: {
				files: [
					{expand: true, src: ['assets/img/*'], dest: 'www/', filter: 'isFile'}
				]
			},
		},
		initialize: {
			assets: ['assets/img', 'assets/css', 'assets/js'],
			www: ['www/assets/img', 'www/assets/css', 'www/assets/js']
		},
		clean: {
			assets: "assets",
			www: "www"
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('default', ['sass:dist', 'uglify:dist', 'jade:dist']);
	grunt.registerTask('dev', [
		'clean:assets',
		'initialize:assets',
		'copy:dev',
		'sass:dist',
		'jade:dev'
	]);
	grunt.registerTask('deploy', [
		'clean:www',
		'initialize:www',
		'sass:deploy',
		'uglify:deploy',
		'jade:deploy',
		'copy:deploy',
	]);
	grunt.registerMultiTask('initialize', 'Created directory hierarchy', function() {
		console.log('Initializing directories for ' + this.target);
		for (var i = 0; i < this.data.length; i++) {
			grunt.file.mkdir(__dirname + '/' + this.data[i]);
		}
	});
};
