module.exports = function(grunt) {
  grunt.initConfig({
    /* Check code style */
    jshint: {
      js: ['Gruntfile.js', 'app/script/**/*.js', 'test/**/*.js'],
      jsx: ['app/scripts/**/*.jsx'],
      options: {
        reporter: require('jshint-stylish')
      }
    },
    /* Check less code style */
    lesslint: {
      src: ['./app/scripts/ui-components/src/**/*.less', './app/styles/src/main.less']
    },

    /* JSX compiling */
    react: {
      dynamic_mappings: {
        files: [
          /* Controllers compiling. */
          {
            expand: true,
            cwd: './app/scripts/controllers/src',
            src: ['**/*.jsx'],
            dest: './app/scripts/controllers/dest',
            ext: '.js'
          },
          /* ui-components compiling */
          {
            expand: true,
            cwd: './app/scripts/ui-components/src',
            src: ['**/**.jsx'],
            dest: './app/scripts/ui-components/dest',
            ext: '.js'
          }
        ]
      }
    },

    /* LESS compiling */
    less: {
      development: {
        files: [
          /* Compile components' less stylesheets */
          {
            expand: true,
            cwd: './app/scripts/ui-components/src', 
            src: ['**/*.less'], 
            dest: './app/scripts/ui-components/dest',
            ext: '.css'
          },
          /* Compile main .less styleshhet */
          {
            './app/styles/dest/main.css': './app/styles/src/main.less'
          }
        ]
      }
    },

    /* Concatenating all styles into single file*/
    concat_css: {
      all: {
        src: ['./app/styles/dest/main.css', './app/scripts/ui-components/dest/**/*.css'],
        dest: "./app/styles/dest/styles.css"
      },
    },

    /* Running http server */
    connect: {
      server: {
        options: {
          livereload: true,
          middleware: function(connect) {
            return [
              connect.static('app')
            ];
          },
          open: true,
          hostname: 'localhost'
        }
      }
    },

    /* Watching for changes in project directory */
    watch: {
      options: {
        livereload: true
      },
      /* Watching for .less files changes */
      less: {
        files: [
          './app/scripts/ui-components/src/**/**.less',
          './app/styles/src/main.less'
        ],
        tasks: ['build'],
        options: {
          reload: true
        }
      },
      /* Watching for scripts changes */
      scripts: {
        files: [
          './app/scripts/controllers/src/**.jsx',
          './app/scripts/ui-components/src/**/**.jsx',
          './app/app.js',
          './app/scripts/router.js'
        ],
        tasks: ['build', 'test'],
        options: {
          spawn: true,
          reload: true
        }
      },
      /* Watching for Gruntfile changes */
      gruntfile: {
        files: ['./Gruntfile.js'],
        options: {
          reload: true
        }
      },
      /* Watching for tests changes */
      tests: {
        files: ['./test/**/*.js'],
        tasks: ['build'],
        options: {
          reload: true
        }
      }
    },

    /* Running Karma+Jasmine+RequireJS tests */
    karma: {
      options: {
        browsers: ['Chrome'],
        singleRun: true,
        frameworks: ['jasmine', 'requirejs'],
        basePath: '',
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: 'INFO'
      },
      /* Running all tests */
      all: {
        options: {
          files: [{
            pattern: 'test/test.config.js',
            included: true
          }, {
            pattern: 'app/scripts/**/**.js',
            included: false
          }, {
            pattern: 'test/**/**.test.js',
            included: false
          }, {
            pattern: 'app/bower_components/**/**.js',
            included: false
          }, ],
        }
      }
    },

    /* Cleaning build results */
    clean: {
      build: ['./app/scripts/controllers/dest/', './app/scripts/ui-components/dest/', './app/styles/dest/'],
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jsxhint');
  grunt.loadNpmTasks('grunt-lesslint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-karma');
  grunt.registerTask('lint',['jshint', 'lesslint']);
  grunt.registerTask('default', ['serve']);
  grunt.registerTask('build', ['clean', 'lint', 'less:development', 'concat_css', 'react' ,'karma:all']);
  grunt.registerTask('serve', ['build', 'connect:server', 'watch']);
  grunt.registerTask('test', ['build']);
};
