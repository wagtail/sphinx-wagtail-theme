const fs = require('fs');
const rimraf = require('rimraf');
const path = require('path');
const sass = require('node-sass');

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // open
    open: {
      dev: {
        path: 'http://localhost:1919'
      }
    },

    // connect
    connect: {
      server: {
        options: {
          port: 1919,
          base: 'demo_docs/build/Result/project/0.0.0',
          livereload: true
        }
      }
    },

    // copy
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

    // stylelint
    stylelint: {
      options: {
        configFile: '.stylelintrc',
        fix: true,
      },
      sass: ['sass/**/*.scss']
    },

    // sass
    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
        outputStyle: 'compressed'
      },
      build: {
        files: {
          't3SphinxThemeRtd/static/css/theme.css': 'sass/theme.scss',
        }
      }
    },

    // exec
    exec: {
      build_sphinx: {
        command: 'docker run --rm '
          + '-v ' + path.resolve('./demo_docs/source') + ':/PROJECT/:ro '
          + '-v ' + path.resolve('./demo_docs/build') + ':/RESULT/ '
          + '-v ' + path.resolve('./t3SphinxThemeRtd') + ':/ALL/userhome/.local/share/virtualenvs/venv-y0waPz_e/lib/python2.7/site-packages/t3SphinxThemeRtd:ro '
          + 't3docs/render-documentation makehtml '
          + '-c make_latex 0 '
          + '-c make_singlehtml 0 '
          + '-c jobfile /PROJECT/jobfile.json '
          + ';'
      },
      build_symlink: {
        command: function () {
          var source = 't3SphinxThemeRtd/static';
          var target = 'demo_docs/build/Result/project/0.0.0/_static';
          rimraf.sync(target);
          fs.symlink(path.resolve(source), path.resolve(target), function (error) {
            console.log(error || "Symlink: " + source + ' => ' + target);
          });
          return 'echo Done';
        }
      }
    },

    // build
    clean: {
      build: ['demo_docs/build/*', '!demo_docs/build/.gitignore'],
      fonts: ['t3SphinxThemeRtd/static/fonts']
    },

    // watch
    watch: {
      /* Compile sass changes into theme directory */
      sass: {
        files: [
          'sass/*.sass',
          'sass/*.scss',
          'node_modules/**/*.sass',
          'node_modules/**/*.scss',
        ],
        tasks: ['sass']
      },
      /* Changes in theme dir rebuild sphinx */
      sphinx: {
        files: [
          't3SphinxThemeRtd/**/.py',
          "t3SphinxThemeRtd/**/.html",
          "t3SphinxThemeRtd/**/.conf",
          'demo_docs/**/*.rst',
          'demo_docs/**/*.py',
        ],
        tasks: ['clean:build', 'exec']
      },
      /* live-reload the demo_docs if sphinx re-builds */
      livereload: {
        files: [
          'demo_docs/build/**/*'
        ],
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

  grunt.registerTask('default', [
    'clean',
    'copy',
    'stylelint',
    'sass'
  ]);
  grunt.registerTask('build', [
    'default',
    'exec'
  ]);
  grunt.registerTask('full', [
    'build',
    'connect',
    'open',
    'watch'
  ]);
};
