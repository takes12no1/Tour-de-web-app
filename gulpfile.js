var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee');
    
var coffeeSources = ['components/coffee/*.coffee'];

gulp.task('log', function(){
    gutil.log('Gulp Taken')
})

gulp.task('coffee', function(){
    gulp.src(coffeeSources)
        .pipe(coffee({ bare: true })
        .on('error', gutil.log))
        .pipe(gulp.dest('components/scripts'))
})