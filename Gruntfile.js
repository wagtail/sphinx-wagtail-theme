module.exports = function(grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    open : {
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
          // includes files within path
          {expand: true, flatten: true, src: ['bower_components/font-awesome/fonts/*'],                                dest: 't3SphinxThemeRtd/static/fonts/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['bower_components/TYPO3_Share_Complete/Share-TTF/Share-Bold.ttf'],       dest: 't3SphinxThemeRtd/static/fonts/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['bower_components/TYPO3_Share_Complete/Share-TTF/Share-BoldItalic.ttf'], dest: 't3SphinxThemeRtd/static/fonts/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['bower_components/TYPO3_Share_Complete/Share-TTF/Share-Italic.ttf'],     dest: 't3SphinxThemeRtd/static/fonts/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['bower_components/TYPO3_Share_Complete/Share-TTF/Share-Regular.ttf'],    dest: 't3SphinxThemeRtd/static/fonts/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['bower_components/TYPO3_Share_Complete/Share-TTF/Share-TechMono.ttf'],   dest: 't3SphinxThemeRtd/static/fonts/', filter: 'isFile'},

          // {src: ['bower_components/font-source-sans-pro-sass/source-sans-pro.scss'], dest: 'sass/_source-sans-pro.scss'},
          {expand: true, flatten: true, src: ['bower_components/font-source-sans-pro-sass/eot/*-It*' ],     dest: 't3SphinxThemeRtd/static/fonts/SourceSansPro/eot/',  filter: 'isFile'},
          {expand: true, flatten: true, src: ['bower_components/font-source-sans-pro-sass/eot/*Bold*' ],    dest: 't3SphinxThemeRtd/static/fonts/SourceSansPro/eot/',  filter: 'isFile'},
          {expand: true, flatten: true, src: ['bower_components/font-source-sans-pro-sass/eot/*Regular*' ], dest: 't3SphinxThemeRtd/static/fonts/SourceSansPro/eot/',  filter: 'isFile'},
          {expand: true, flatten: true, src: ['bower_components/font-source-sans-pro-sass/otf/*-It*' ],     dest: 't3SphinxThemeRtd/static/fonts/SourceSansPro/otf/',  filter: 'isFile'},
          {expand: true, flatten: true, src: ['bower_components/font-source-sans-pro-sass/otf/*Bold*' ],    dest: 't3SphinxThemeRtd/static/fonts/SourceSansPro/otf/',  filter: 'isFile'},
          {expand: true, flatten: true, src: ['bower_components/font-source-sans-pro-sass/otf/*Regular*' ], dest: 't3SphinxThemeRtd/static/fonts/SourceSansPro/otf/',  filter: 'isFile'},
          {expand: true, flatten: true, src: ['bower_components/font-source-sans-pro-sass/ttf/*-It*' ],     dest: 't3SphinxThemeRtd/static/fonts/SourceSansPro/ttf/',  filter: 'isFile'},
          {expand: true, flatten: true, src: ['bower_components/font-source-sans-pro-sass/ttf/*Bold*' ],    dest: 't3SphinxThemeRtd/static/fonts/SourceSansPro/ttf/',  filter: 'isFile'},
          {expand: true, flatten: true, src: ['bower_components/font-source-sans-pro-sass/ttf/*Regular*' ], dest: 't3SphinxThemeRtd/static/fonts/SourceSansPro/ttf/',  filter: 'isFile'},
          {expand: true, flatten: true, src: ['bower_components/font-source-sans-pro-sass/woff/*-It*'],     dest: 't3SphinxThemeRtd/static/fonts/SourceSansPro/woff/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['bower_components/font-source-sans-pro-sass/woff/*Bold*'],    dest: 't3SphinxThemeRtd/static/fonts/SourceSansPro/woff/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['bower_components/font-source-sans-pro-sass/woff/*Regular*'], dest: 't3SphinxThemeRtd/static/fonts/SourceSansPro/woff/', filter: 'isFile'},

          {src: ['bower_components/1.017R/EOT/SourceCodePro-Bold.eot'],              dest: 't3SphinxThemeRtd/static/fonts/SourceCodePro/eot/SourceCodePro-Bold.eot'},
          {src: ['bower_components/1.017R/EOT/SourceCodePro-Regular.eot'],           dest: 't3SphinxThemeRtd/static/fonts/SourceCodePro/eot/SourceCodePro-Regular.eot'},
          {src: ['bower_components/1.017R/OTF/SourceCodePro-Bold.otf'],              dest: 't3SphinxThemeRtd/static/fonts/SourceCodePro/otf/SourceCodePro-Bold.otf'},
          {src: ['bower_components/1.017R/OTF/SourceCodePro-Regular.otf'],           dest: 't3SphinxThemeRtd/static/fonts/SourceCodePro/otf/SourceCodePro-Regular.otf'},
          {src: ['bower_components/1.017R/SVG/SourceCodePro-Bold.svg'],              dest: 't3SphinxThemeRtd/static/fonts/SourceCodePro/svg/SourceCodePro-Bold.svg'},
          {src: ['bower_components/1.017R/SVG/SourceCodePro-Regular.svg'],           dest: 't3SphinxThemeRtd/static/fonts/SourceCodePro/svg/SourceCodePro-Regular.svg'},
          {src: ['bower_components/1.017R/TTF/SourceCodePro-Bold.ttf'],              dest: 't3SphinxThemeRtd/static/fonts/SourceCodePro/ttf/SourceCodePro-Bold.ttf'},
          {src: ['bower_components/1.017R/TTF/SourceCodePro-Regular.ttf'],           dest: 't3SphinxThemeRtd/static/fonts/SourceCodePro/ttf/SourceCodePro-Regular.ttf'},
          {src: ['bower_components/1.017R/WOFF/TTF/SourceCodePro-Bold.ttf.woff'],    dest: 't3SphinxThemeRtd/static/fonts/SourceCodePro/woff/SourceCodePro-Bold.woff'},
          {src: ['bower_components/1.017R/WOFF/TTF/SourceCodePro-Regular.ttf.woff'], dest: 't3SphinxThemeRtd/static/fonts/SourceCodePro/woff/SourceCodePro-Regular.woff'},

          {expand: true, flatten: true, src: ['bower_components/jquery/dist/*'], dest: 't3SphinxThemeRtd/static/', filter: 'isFile'}
          // todo: jquery-ui!

        ]
      }
    },

    sass: {
      dev: {
        options: {
          style: 'expanded',
          loadPath: ['bower_components/bourbon/dist', 'bower_components/neat/app/assets/stylesheets', 'bower_components/font-awesome/scss', 'bower_components/wyrm/sass']
        },
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.sass'],
          dest: 't3SphinxThemeRtd/static/css',
          ext: '.css'
        }]
      },
      build: {
        options: {
          style: 'compressed',
          loadPath: ['bower_components/bourbon/dist', 'bower_components/neat/app/assets/stylesheets', 'bower_components/font-awesome/scss', 'bower_components/wyrm/sass']
        },
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.sass', '*.scss'],
          dest: 't3SphinxThemeRtd/static/css',
          ext: '.css'
        }]
      }
    },

    exec: {
      bower_update: {
        cmd: 'bower update'
      },
      build_sphinx: {
        cmd: 'sphinx-build demo_docs/source demo_docs/build'
      }
    },
    clean: {
      build: ["demo_docs/build"],
      fonts: ["t3SphinxThemeRtd/static/fonts"]
    },

    watch: {
      /* Compile sass changes into theme directory */
      sass: {
        files: ['sass/*.sass', 'sass/*.scss', 'bower_components/**/*.sass'],
        tasks: ['sass:dev']
      },
      /* Changes in theme dir rebuild sphinx */
      sphinx: {
        files: ['t3SphinxThemeRtd/**/*', 'demo_docs/**/*.rst', 'demo_docs/**/*.py'],
        tasks: ['clean:build','exec:build_sphinx']
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
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-open');

  grunt.registerTask('fonts', ['clean:fonts','copy:fonts']);
  grunt.registerTask('default', ['exec:bower_update','clean:build','sass:dev','exec:build_sphinx','connect','open','watch']);
  grunt.registerTask('build', ['exec:bower_update','clean:build','sass:build','exec:build_sphinx']);
}

