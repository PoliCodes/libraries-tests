var gulp = require('gulp');
var react = require('gulp-react');
var watch = require('gulp-watch');
//var typescript = require('gulp-tsc');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');



var browserify = require('browserify');
var gutil = require('gulp-util');
var tap = require('gulp-tap');
var buffer = require('gulp-buffer');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');


 
gulp.task('default', [ "typescript", "react" ], function () {
	gulp.start("watch");
});


gulp.task('watch', function () {
	watch('./js/**/*.jsx', function (e) {
		gulp.start("react");
	});
	watch(['./ts/**/*.tsx','./ts/**/*.ts'], function (e) {
		gulp.start("typescript");
	});
	return undefined;
});




gulp.task('react', [], function () {
	return gulp.src('./**/*.jsx')
		.pipe(react())
		.on('error', swallowError)
		.pipe(gulp.dest('./'));
});


// Typescript -------------------------------------
gulp.task('typescript', function() {  
    return gulp.src(['./ts/**/*.ts', './ts/**/*.tsx' ])
        .pipe(tsProject({
            noImplicitAny: true,
    		declaration: true
        }))
		.on('error', swallowError)
        .pipe(gulp.dest('./js/'));
});






gulp.task('js', function () {

  return gulp.src('./js/**/*.js', {read: false}) // no need of reading file because browserify does.

    // transform file objects using gulp-tap plugin
    .pipe(tap(function (file) {

      gutil.log('bundling ' + file.path);

      // replace file contents with browserify's bundle stream
      file.contents = browserify(file.path, {debug: true}).bundle();

    }))

    // transform streaming contents into buffer contents (because gulp-sourcemaps does not support streaming contents)
    .pipe(buffer())

    // load and init sourcemaps
    .pipe(sourcemaps.init({loadMaps: true}))

    .pipe(uglify())

    // write sourcemaps
    .pipe(sourcemaps.write('./'))

    .pipe(gulp.dest('dest'));

});


function swallowError (error) {
  // If you want details of the error in the console
  console.log(error.toString())
  this.emit('end')
}