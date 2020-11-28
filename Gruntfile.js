const path = require('path');
const sass = require('node-sass');

module.exports = function (grunt) {

  /**
   * Grunt task to remove source map comment
   */
  grunt.registerMultiTask('removesourcemap', 'Grunt task to remove sourcemp comment from files', function () {
    var done = this.async(),
      files = this.filesSrc.filter(function (file) {
        return grunt.file.isFile(file);
      }),
      counter = 0;
    this.files.forEach(function (file) {
      file.src.filter(function (filepath) {
        var content = grunt.file.read(filepath).replace(/\/\/# sourceMappingURL=\S+/, '');
        grunt.file.write(file.dest, content);
        grunt.log.success('Source file "' + filepath + '" was processed.');
        counter++;
        if (counter >= files.length) done(true);
      });
    });
  });

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
            dest: 'sphinx_typo3_theme/static/fonts/'
          },
          {
            expand: true,
            cwd: 'fonts',
            src: ['**/*', '!**/*.txt'],
            dest: 'sphinx_typo3_theme/static/fonts/'
          }
        ]
      },
      libs: {
        files: [
          {
            src: 'node_modules/jquery/dist/jquery.min.js',
            dest: 'sphinx_typo3_theme/static/js/jquery.min.js'
          },
          {
            src: 'node_modules/popper.js/dist/umd/popper.min.js',
            dest: 'sphinx_typo3_theme/static/js/popper.min.js'
          },
          {
            src: 'node_modules/bootstrap/dist/js/bootstrap.min.js',
            dest: 'sphinx_typo3_theme/static/js/bootstrap.min.js'
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
        outputStyle: 'compressed',
        sourceMap: true
      },
      build: {
        files: {
          'sphinx_typo3_theme/static/css/theme.css': 'sass/theme.scss',
          'sphinx_typo3_theme/static/css/webfonts.css': 'sass/webfonts.scss',
          'sphinx_typo3_theme/static/css/fontawesome.css': 'sass/fontawesome.scss',
        }
      }
    },

    // modernizr
    modernizr: {
      main: {
        'dest': 'sphinx_typo3_theme/static/js/modernizr.min.js',
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
      autocomplete: {
        src: 'node_modules/autocompleter/autocomplete.js',
        dest: 'sphinx_typo3_theme/static/js/autocomplete.min.js'
      },
      underscore: {
        src: 'node_modules/underscore/underscore.js',
        dest: 'sphinx_typo3_theme/static/js/underscore.min.js'
      },
      modernizr: {
        src: 'sphinx_typo3_theme/static/js/modernizr.min.js',
        dest: 'sphinx_typo3_theme/static/js/modernizr.min.js'
      },
      // SOURCE: https://github.com/sphinx-doc/sphinx/blob/master/sphinx/themes/basic/static/doctools.js
      doctools: {
        src: 'js/doctools.js',
        dest: 'sphinx_typo3_theme/static/js/doctools.min.js'
      },
      // SOURCE: https://github.com/sphinx-doc/sphinx/blob/master/sphinx/themes/basic/static/searchtools.js
      searchtools: {
        src: 'js/searchtools.js',
        dest: 'sphinx_typo3_theme/static/js/searchtools.min.js'
      },
      theme: {
        src: 'js/theme.js',
        dest: 'sphinx_typo3_theme/static/js/theme.min.js'
      },
    },

    // remove sourcemaps from dist files
    removesourcemap: {
      contrib: {
        files: {
          'sphinx_typo3_theme/static/js/jquery.min.js': 'sphinx_typo3_theme/static/js/jquery.min.js',
          'sphinx_typo3_theme/static/js/bootstrap.min.js': 'sphinx_typo3_theme/static/js/bootstrap.min.js',
          'sphinx_typo3_theme/static/js/popper.min.js': 'sphinx_typo3_theme/static/js/popper.min.js'
        }
      }
    },

    // exec
    exec: {
      build_sphinx: {
        command: () => {
          systemSpecific = '';
          switch (process.platform) {
            case 'linux':
              systemSpecific = '--user=$(id -u):$(id -g) ';
              break;
          }
          command = 'docker run --rm '
            + systemSpecific
            + '--volume ' + path.resolve((grunt.option('source') ? grunt.option('source') : './node_modules/TYPO3CMS-Guide-HowToDocument')) + ':/PROJECT/:ro '
            + '--volume ' + path.resolve('./config') + ':/CONFIG/:ro '
            + '--volume ' + path.resolve('./build') + ':/RESULT/ '
            + '--volume ' + path.resolve('./sphinx_typo3_theme') + ':/ALL/userhome/.local/share/virtualenvs/venv-y0waPz_e/lib/python2.7/site-packages/sphinx_typo3_theme:ro '
            + 't3docs/render-documentation makehtml '
            + '-c make_latex 0 '
            + '-c make_singlehtml 0 '
            + '-c jobfile /CONFIG/jobfile-online.json '
            + ';'
          return command;
        }
      }
    },

    // build
    clean: {
      build: ['build/*', '!build/.gitignore'],
      css: ['sphinx_typo3_theme/static/css'],
      fonts: ['sphinx_typo3_theme/static/fonts'],
      js: ['sphinx_typo3_theme/static/js'],
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
          'sphinx_typo3_theme/**/*',
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
  grunt.registerTask('default', ['clean', 'update', 'stylelint', 'sass', 'js', 'removesourcemap']);
  grunt.registerTask('frontend', ['default']);
  grunt.registerTask('build', ['default', 'exec']);
  grunt.registerTask('render', ['clean:build', 'exec']);
};
