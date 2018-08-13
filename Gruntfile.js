module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserSync: {
      dev : {
        bsFiles: {
          src : ['app/**/*']
        },
        options: {
          server: {
            baseDir: "./app"
          },
          notify: false,
          watchTask: true
        }
      }
    },

    sass: {
      dist: {
        options: {
          sourcemap: 'none'
        },
        files: {
          "app/style.css": "app/sass/style.scss"
        }
      }
    },

    watch: {
      scripts: {
        files: ['**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      },
    },
  });


  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('dev', ['browserSync:dev', 'watch']);
  grunt.registerTask('test', ['sass']);


}
