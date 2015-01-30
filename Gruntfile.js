module.exports = function(grunt) {
    grunt.initConfig({

        jshint: {},

        concat: {},

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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-react');

    grunt.registerTask('default', []);
};
