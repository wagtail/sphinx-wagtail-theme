const sass = require('node-sass');

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    open: {
      dev: {
        path: 'http://localhost:1919'
      }
    },
    connect: {
      server: {
        options: {
          port: 1919,
          base: 'demo_docs/build',
          livereload: true
        }
      }
    },
    copy: {
      fonts: {
        files: [
          {
            expand: true,
            cwd: 'node_modules/@fortawesome/fontawesome-free/webfonts',
            src: ['**/*'],
            dest: 't3SphinxThemeRtd/static/fonts/'
          },
          {
            expand: true,
            cwd: 'fonts',
            src: ['**/*'],
            dest: 't3SphinxThemeRtd/static/fonts/'
          },
          {
            expand: true,
            cwd: 'node_modules/jquery/dist',
            src: ['**/*'],
            dest: 't3SphinxThemeRtd/static/js/'
          }
        ]
      }
    },

    stylelint: {
      options: {
        configFile: '.stylelintrc',
        fix: true,
      },
      sass: ['sass/**/*.scss']
    },

    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      dev: {
        options: {
          outputStyle: 'expanded'
        },
        files: {
          't3SphinxThemeRtd/static/css/theme.css': 'sass/theme.scss',
        }
      },
      build: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          't3SphinxThemeRtd/static/css/theme.css': 'sass/theme.scss',
        }
      }
    },

    exec: {
      build_sphinx: {
        cmd: './my-sphinx-build.sh demo_docs/source demo_docs/build'
      }
    },

    clean: {
      build: ["demo_docs/build"],
      fonts: ["t3SphinxThemeRtd/static/fonts"]
    },

    watch: {
      /* Compile sass changes into theme directory */
      sass: {
        files: ['sass/*.sass', 'sass/*.scss', 'node_modules/**/*.sass'],
        tasks: ['sass:dev']
      },
      /* Changes in theme dir rebuild sphinx */
      sphinx: {
        files: ['t3SphinxThemeRtd/**/*', 'demo_docs/**/*.rst', 'demo_docs/**/*.py'],
        tasks: ['clean:build', 'exec:build_sphinx']
      },
      /* live-reload the demo_docs if sphinx re-builds */
      livereload: {
        files: ['demo_docs/build/**/*'],
        options: { livereload: true }
      }
    }

  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-stylelint');

  grunt.registerTask('default', ['clean:build', 'clean:fonts', 'copy:fonts', 'stylelint', 'sass:build']);
  grunt.registerTask('build', ['clean:build', 'clean:fonts', 'copy:fonts', 'stylelint', 'sass:build', 'exec:build_sphinx']);
  grunt.registerTask('full', ['clean:build', 'clean:fonts', 'copy:fonts', 'stylelint', 'sass:dev', 'exec:build_sphinx', 'connect', 'open', 'watch']);
};
