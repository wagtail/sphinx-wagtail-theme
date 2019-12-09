const path = require('path');
const sass = require('node-sass');

module.exports = function (grunt) {

  /**
   * Grunt task for modernizr
   */
  grunt.registerMultiTask("modernizr", "Respond to your user’s browser features.", function () {
    var options = this.options(),
      done = this.async(),
      modernizr = require("modernizr"),
      dest = this.data.dest;
    modernizr.build(options, function (output) {
      grunt.file.write(dest, output);
      done();
    });
  });

  /**
   * Project configuration.
   */
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

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
        outputStyle: 'compressed'
      },
      build: {
        files: {
          't3SphinxThemeRtd/static/css/theme.css': 'sass/theme.scss',
          't3SphinxThemeRtd/static/css/webfonts.css': 'sass/webfonts.scss',
          't3SphinxThemeRtd/static/css/fontawesome.css': 'sass/fontawesome.scss',
        }
      }
    },

    // modernizr
    modernizr: {
      main: {
        'dest': 't3SphinxThemeRtd/static/js/modernizr.min.js',
        'options': {
          'options': [
            'domPrefixes',
            'prefixes',
            'addTest',
            'hasEvent',
            'mq',
            'prefixedCSSValue',
            'testAllProps',
            'testProp',
            'testStyles',
            'setClasses'
          ],
          'feature-detects': [
            'custom-elements',
            'history',
            'pointerevents',
            'postmessage',
            'webgl',
            'websockets',
            'css/animations',
            'css/columns',
            'css/flexbox',
            'elem/picture',
            'img/sizes',
            'img/srcset',
            'workers/webworkers'
          ]
        }
      }
    },

    // uglify
    uglify: {
      options: {
        output: {
          comments: false
        }
      },
      modernizr: {
        src: 't3SphinxThemeRtd/static/js/modernizr.min.js',
        dest: 't3SphinxThemeRtd/static/js/modernizr.min.js'
      },
      theme: {
        src: 'js/theme.js',
        dest: 't3SphinxThemeRtd/static/js/theme.min.js'
      },
      t3autocomplete: {
        src: 'js/t3autocomplete.js',
        dest: 't3SphinxThemeRtd/static/js/t3autocomplete.min.js'
      },
      t3autocomplete2: {
        src: 'js/t3autocomplete2.js',
        dest: 't3SphinxThemeRtd/static/js/t3autocomplete2.min.js'
      },
    },

    // exec
    exec: {
      build_sphinx: {
        command: 'docker run --rm '
          + '-v ' + path.resolve('./node_modules/TYPO3CMS-Guide-HowToDocument') + ':/PROJECT/:ro '
          + '-v ' + path.resolve('./config') + ':/CONFIG/:ro '
          + '-v ' + path.resolve('./build') + ':/RESULT/ '
          + '-v ' + path.resolve('./t3SphinxThemeRtd') + ':/ALL/userhome/.local/share/virtualenvs/venv-y0waPz_e/lib/python2.7/site-packages/t3SphinxThemeRtd:ro '
          + 't3docs/render-documentation makehtml '
          + '-c make_latex 0 '
          + '-c make_singlehtml 0 '
          + '-c jobfile /CONFIG/jobfile.json '
          + ';'
      }
    },

    // build
    clean: {
      build: ['build/*', '!build/.gitignore'],
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
          't3SphinxThemeRtd/**/*',
        ],
        tasks: ['clean:build', 'exec']
      },
      /* live-reload the demo_docs if sphinx re-builds */
      livereload: {
        files: [
          'build/**/*'
        ],
        options: { livereload: true }
      }
    }

  });

  /**
   * Load tasks
   */
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-stylelint');

  /**
   * Register tasks
   */
  grunt.registerTask('update', ['copy', 'modernizr']);
  grunt.registerTask('js', ['uglify']);
  grunt.registerTask('default', ['clean', 'update', 'stylelint', 'sass', 'js']);
  grunt.registerTask('build', ['default', 'exec']);
};
