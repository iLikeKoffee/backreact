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
                        cwd: './scripts/controllers/src',
                        src: ['**/*.jsx'],
                        dest: './scripts/controllers/dest',
                        ext: '.js'
                    },
                    /* ui-components compiling */
                    {
                        expand: true,
                        cwd: './scripts/ui-components/src',
                        src: ['**/**.jsx'],
                        dest: './scripts/ui-components/dest',
                        ext: '.js'
                    }
                ]
            }
        },
        /* LESS compiling */
        less: {
            development: {
                files: [{
                    expand: true, // Enable dynamic expansion.
                    cwd: './scripts/ui-components/src', // Src matches are relative to this path.
                    src: ['**/*.less'], // Actual pattern(s) to match.
                    dest: './scripts/ui-components/dest', // Destination path prefix.
                    ext: '.css', // Dest filepaths will have this extension.
                }]
            }
        },
        /* Concatenate css files into one */
        concat_css: {
            all: {
                src: ["./scripts/ui-components/dest/**/*.css"],
                dest: "./css/dest/styles.css"
            },
        },
        /* Running simple http server */
        connect: {
            server: {
                options: {
                    open: false,
                    livereload: true
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
                    './scripts/ui-components/src/**/**.less',
                ],
                tasks: ['less:development','concat_css']
            },
            /* Watching fo scripts change */
            scripts: {
                files: [
                    './scripts/controllers/src/**.jsx',
                    './scripts/ui-components/src/**/**.jsx',
                    './scripts/app.js',
                    './scripts/router.js'
                ],
                tasks: ['react'],
                options: {
                    spawn: true,
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-react');

    grunt.registerTask('default', ['serve']);
    grunt.registerTask('serve', ['connect:server', 'watch']);
};
