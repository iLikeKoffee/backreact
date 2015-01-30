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
    grunt.loadNpmTasks('grunt-react');

    grunt.registerTask('default', ['serve']);
    grunt.registerTask('serve', ['connect:server', 'watch']);
};
