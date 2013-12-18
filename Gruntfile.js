'use strict';

module.exports = function (grunt) {
	var modernizr = 'bower_components/modernizr/modernizr.js';
	var jsFiles = [
		'bower_components/jquery/jquery.min.js',
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
					'assets/js/app.min.js': jsFiles
				}
			},
			deploy: {
				files: {
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
						modernizr: modernizr,
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
						modernizr: modernizr,
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
			deploy: {
				files: [
					{expand: true, src: ['assets/img/*'], dest: 'www/', filter: 'isFile'}
				]
			}
		},
		initialize: {
			www: ['www/assets/img', 'www/assets/css', 'www/assets/js']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['sass:dist', 'uglify:dist', 'jade:dist']);
	grunt.registerTask('dev', ['sass:dist', 'jade:dev']);
	grunt.registerTask('deploy', [
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
