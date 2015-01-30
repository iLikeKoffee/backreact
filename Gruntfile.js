module.exports = function(grunt) {
    grunt.initConfig({

        jshint: {},

        concat: {},

        /* JSX compiling */
        react: {
            dynamic_mappings: {
                files: [{
                    expand: true,
                    cwd: './scripts/controllers/src',
                    src: ['**/*.jsx'],
                    dest: './scripts/controllers/dest',
                    ext: '.js'
                }]
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
                files: ['./scripts/controllers/src/**.jsx'],
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
    grunt.registerTask('serve', ['connect:server','watch']);
};
