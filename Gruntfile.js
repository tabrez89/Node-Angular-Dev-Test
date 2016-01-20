module.exports = function(grunt) {

     // Add the grunt-mocha-test tasks. 
  grunt.loadNpmTasks('grunt-mocha-test');
 	grunt.loadNpmTasks('grunt-contrib-jshint');
 	grunt.loadNpmTasks('grunt-contrib-uglify');
 	 grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.initConfig({
    // Configure a mochaTest task 
    concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['public/static/js/**/*.js'],
      dest: 'dist/built.js',
    },
  },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          captureFile: 'results.txt', 
          quiet: false, 
          clearRequireCache: false 
        },
        src: ['test/**/*.js']
      }
    },
    uglify: {
    dynamic_mappings: {
      files: [
        {
          expand: true,  
          cwd: 'dist/',     
          src: ['**/*.js'], 
          dest: 'build/', 
          ext: '.min.js',   
          extDot: 'first'   
        },
      ],
    },
  },
  jshint: {
    options: {
      curly: true,
      eqeqeq: true,
      eqnull: true,
      browser: true,
      globals: {
        jQuery: true
      },
    },
    uses_defaults: ['public/static/app/**/*.js', 'app/**/*.js'],
    with_overrides: {
      options: {
        curly: false,
        undef: true,
      },
      files: {
        src: ['public/static/app/**/*.js', 'app/**/*.js']
      },
    }
  },
  watch: {
  scripts: {
    files: '**/*.js',
    tasks: ['jshint'],
    options: {
      interrupt: true,
    },
  },
},
  });
 
 
  grunt.registerTask('default', ['concat','uglify','mochaTest']);


   
};
