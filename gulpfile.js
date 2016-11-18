var gulp = require('gulp');
var uglify=require('gulp-uglify');
var rename=require('gulp-rename');
var cleanCss=require('gulp-clean-css');
var minifyHtml=require('gulp-minify-html');

gulp.task('js', function () {
    gulp.src('./js/index.js')
        .pipe(gulp.dest('build'))
        .pipe(uglify())
        .pipe(rename(function (file) {
            file.basename+='.min';
        }))
        .pipe(gulp.dest('build'));
});
gulp.task('css',function () {
    gulp.src('css/*.css')
        .pipe(gulp.dest('build/css'))
        .pipe(cleanCss())
        .pipe(rename(function (file) {
            file.basename+='.min'
        }))
        .pipe(gulp.dest('build/css'));
});
gulp.task('html',function () {
    gulp.src('./index.html')
        .pipe(minifyHtml())
        .pipe(gulp.dest('build'))
});

gulp.task('default',['html','css','js']);
