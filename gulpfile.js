var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');

gulp.task('default', ['copy-html', 'copy-js', 'copy-css']);

/*

gulp.src(globs[, options])
从globs读取数据流
可以通过返回对象的pipe方法写入流到其他插件中

gulp.dest(path[, options])
写入流到path

gulp.task(name[, deps], fn)
注册一个task

*/


/*
Glob

 - * matches any number of characters, but not /
 - ? matches a single character, but not /
 - ** matches any number of characters, including /, as long as it's the only thing in a path part
 - {} allows for a comma-separated list of "or" expressions
 - ! at the beginning of a pattern will negate the match

*/

gulp.task('copy-html', function() {
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('copy-js', function() {
  gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy-css', function() {
  gulp.src('src/css/*.css')
    .pipe(minify())
    .pipe(gulp.dest('dist/css/'));
});