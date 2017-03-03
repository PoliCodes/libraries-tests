var gulp = require('gulp');
var react = require('gulp-react');
var watch = require('gulp-watch');
 
gulp.task('default', ["react"], function () {
    gulp.start("watch");
});


gulp.task('watch', function () {
    return watch('./**/*.jsx', function (e) {
        gulp.start("react");
    });
});

gulp.task('react', function () {
    return gulp.src('./**/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('./'));
});

