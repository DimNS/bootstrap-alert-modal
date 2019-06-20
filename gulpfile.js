var gulp   = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sort   = require('gulp-sort');
var uglify = require('gulp-uglify');

function JS() {
    return gulp.src('src/*.js')
        .pipe(sort())
        .pipe(concat('bootstrap-alert-modal.js'))
        .pipe(gulp.dest('dist'));
}

function minJS() {
    return gulp.src('dist/bootstrap-alert-modal.js')
        .pipe(uglify())
        .pipe(rename('bootstrap-alert-modal.min.js'))
        .pipe(gulp.dest('dist'));
}

gulp.task('build', gulp.series(JS, minJS));