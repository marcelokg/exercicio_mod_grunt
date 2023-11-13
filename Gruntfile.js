module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files:{
                    'dev/styles/main.css':'src/styles/main.less'
                }
            }
        },
        watch:{
            less:{
                files: ['src/styles/**/*.less'],
                tasks: ['less:development']
            },
            html:{
                files: ['src/index.html']
            }
        },
        uglify:{
            target:{
                files:{
                    'dev/scripts/main.min.js':'src/scripts/main.js'
                }
            }
        }
    })
    
    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-watch')

    grunt.registerTask('default', ['watch'])
    grunt.registerTask('build', ['uglify'])
}