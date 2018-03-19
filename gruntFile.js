module.exports = function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        jshint:{
            files:{
                'src':['buildScripts/src/server/*.js']
            },
            options:{
                'curly':true,
                'eqnull':true,
                'eqeqeq':true,
                'undef':true,
                'jshintrc': '.jshintrc',
                'node':true,
                'globals':{

                }
            }
        }
    });
    grunt.registerTask('default',[]);
    grunt.loadNpmTasks('grunt-contrib-jshint');
};