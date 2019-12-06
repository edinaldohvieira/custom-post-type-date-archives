module.exports = function( grunt ) {

	require( 'load-grunt-tasks' )( grunt );

	'use strict';

	// Project configuration
	grunt.initConfig( {

		pkg: grunt.file.readJSON( 'package.json' ),

		githash: {
			main: {
				options: {},
			}
		},

		addtextdomain: {
			options: {
				textdomain: 'related-posts-by-taxonomy',
			},
			target: {
				files: {
					src: [ '*.php', '**/*.php', '!node_modules/**', '!bin/**' ]
				}
			}
		},

		makepot: {
			target: {
				options: {
					domainPath: '/languages',
					mainFile: 'custom-post-type-date-archives.php',
					potFilename: 'custom-post-type-date-archives.pot',
					potHeaders: {
						poedit: true,
						'x-poedit-keywordslist': true
					},
					type: 'wp-plugin',
					updateTimestamp: true
				}
			}
		},

		// Clean up build directory
		clean: {
			main: [ 'build/<%= pkg.name %>' ],
			blocks: ['includes/assets/js/blocks']
		},

		// Copy the theme into the build directory
		copy: {
			main: {
				src: [
					'**',
					'!node_modules/**',
					'!bin/**',
					'!tests/**',
					'!build/**',
					'!blocks/**',
					'!.git/**',
					'!Gruntfile.js',
					'!package.json',
					'!.gitignore',
					'!.gitmodules',
					'!.gitattributes',
					'!.editorconfig',
					'!**/Gruntfile.js',
					'!**/package.json',
					'!**/phpunit.xml',
					'!**/composer.lock',
					'!**/package-lock.json',
					'!**/README.md',
					'!**/readme.md',
					'!**/CHANGELOG.md',
					'!**/CONTRIBUTING.md',
					'!**/travis.yml',
					'!**/*~'
				],
				dest: 'build/<%= pkg.name %>/'
			}
		},

		version: {
			readmetxt: {
				options: {
					prefix: 'Stable tag: *'
				},
				src: [ 'readme.txt' ]
			},
			tested_up_to: {
				options: {
					pkg: {
						"version": "<%= pkg.tested_up_to %>"
					},
					prefix: 'Tested up to: *'
				},
				src: [ 'readme.txt', 'readme.md' ]
			},
			requires_at_least: {
				options: {
					pkg: {
						"version": "<%= pkg.requires_at_least %>"
					},
					prefix: 'Requires at least: *'
				},
				src: [ 'readme.txt', 'readme.md' ]
			},
			plugin: {
				options: {
					prefix: 'Version: *'
				},
				src: [ 'readme.md', 'custom-post-type-date-archives.php' ]
			},
			blocks: {
				options: {
					prefix: '"version": "*"'
				},
				src: [ 'blocks/package.json' ]
			},
			define: {
				options: {
					prefix: "'CPT_DATE_ARCHIVES_VERSION', '*"
				},
				src: [ 'custom-post-type-date-archives.php' ]
			},
		},

		replace: {
			replace_branch: {
				src: [ 'readme.md' ],
				overwrite: true, // overwrite matched source files
				replacements: [ {
					from: /custom-post-type-date-archives.svg\?branch=(master|develop)/g,
					to: "custom-post-type-date-archives.svg?branch=<%= githash.main.branch %>"
				}, {
					from: /custom-post-type-date-archives\/tree\/(master|develop)#/g,
					to: "custom-post-type-date-archives/tree/<%= githash.main.branch %>#"
				} ]
			}
		},

		run: {
			build: {
				cmd: 'npm',
				options: {
					cwd: 'blocks'
  				},
				args: [
					'run',
					'build'
				]
	 		}
		}


	} );


	grunt.registerTask( 'i18n', [ 'addtextdomain', 'makepot' ] );

	grunt.registerTask( 'travis', [ 'githash', 'replace:replace_branch' ] );

	// Creates build
	grunt.registerTask( 'build', [ 'clean:main', 'clean:blocks', 'version', 'run:build', 'makepot', 'travis', 'copy:main' ] );

	grunt.util.linefeed = '\n';

};