module.exports = function(grunt) {
    grunt.initConfig({

        jshint: {},

        concat: {},

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
                        expand: true, // Enable dynamic expansion.
                        cwd: './app/scripts/ui-components/src', // Src matches are relative to this path.
                        src: ['**/*.less'], // Actual pattern(s) to match.
                        dest: './app/scripts/ui-components/dest', // Destination path prefix.
                        ext: '.css', // Dest filepaths will have this extension.
                    },
                    /* Compile main .less styleshhet */
                    {
                        './app/styles/dest/main.css': './app/styles/src/main.less'
                    }
                ]
            }
        },
        /* Concatenate css files into one */
        concat_css: {
            all: {
                src: ['./app/styles/dest/main.css', './app/scripts/ui-components/dest/**/*.css'],
                dest: "./app/styles/dest/styles.css"
            },
        },
        /* Running simple http server */
        connect: {
            server: {
                options: {
                    open: false,
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
        /* Watch task config */
        watch: {
            options: {
                livereload: true
            },
            /* Watching for .less files change */
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
            /* Watching fo scripts change */
            scripts: {
                files: [
                    './app/scripts/controllers/src/**.jsx',
                    './app/scripts/ui-components/src/**/**.jsx',
                    './app/scripts/app.js',
                    './app/scripts/router.js'
                ],
                tasks: ['build'],
                options: {
                    spawn: true,
                    reload: true
                }
            },
            gruntfile: {
                files: ['Gruntfile.js'],
                options: {
                    reload: true
                }
            },
        },
        clean: {
            build: ['./app/scripts/controllers/dest/', './app/scripts/ui-components/dest/', './app/styles/dest/'],
        },
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-react');

    grunt.registerTask('default', ['serve']);
    grunt.registerTask('build', ['clean','less:development', 'concat_css', 'react']);
    grunt.registerTask('serve', ['build','connect:server', 'watch']);
};
