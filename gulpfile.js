var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat');
    
    
var coffeeSources = ['components/coffee/*.coffee'];
var jsSources = ['components/scripts/*.js'];

gulp.task('log', function(){
    gutil.log('Gulp Taken')
})

gulp.task('coffee', function(){
    gulp.src(coffeeSources)
        .pipe(coffee({ bare: true })
        .on('error', gutil.log))
        .pipe(gulp.dest('components/scripts'))
})

gulp.task('js', function(){
    gulp.src(jsSources)
        .pipe(concat('script.js'))
        .pipe(browserify())
        .pipe(gulp.dest('builds/development/js'))
})