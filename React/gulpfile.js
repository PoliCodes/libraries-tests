var gulp = require('gulp');
var react = require('gulp-react');
var watch = require('gulp-watch');
 
gulp.task('default', ["react"], function () {
    gulp.start("watch");
});


gulp.task('watch', function () {
    return watch('./**/*.jsx', function (e) {
        gulp
        .on('error', swallowError)
        .start("react");
    });
});

gulp.task('react', function () {
    return gulp.src('./**/*.jsx')
        .pipe(react())
        .on('error', swallowError)
        .pipe(gulp.dest('./'));
});


function swallowError (error) {
  // If you want details of the error in the console
  console.log(error.toString())
  this.emit('end')
}