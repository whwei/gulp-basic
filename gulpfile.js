var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var connect = require('gulp-connect');
var autoprefixer = require('gulp-autoprefixer');
var spritesmith = require('gulp.spritesmith');

gulp.task('default', ['copy-html', 'copy-js', 'copy-css', 'connect', 'watch']);

gulp.task('build', ['copy-html', 'uglify-js', 'build-image', 'minify-css']);

gulp.task('build-image', ['sprites', 'copy-image']);

/*

gulp.src(globs[, options])
从globs读取数据流
可以通过返回对象的pipe方法写入流到其他插件中

gulp.dest(path[, options])
写入流到path

gulp.task(name[, deps], fn)
注册一个task

gulp.watch(glob[, opts], tasks)
watch文件的修改

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
    //.pipe(uglify())
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('uglify-js', function() {
  gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('copy-css', function() {
  gulp.src('src/css/*.css')
    .pipe(autoprefixer({
        broswers: ['last 8 versions']
    }))
    //.pipe(minify())
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('minify-css', ['build-image'], function() {
  gulp.src('src/css/*.css')
    .pipe(autoprefixer({
        broswers: ['last 8 versions']
    }))
    .pipe(minify())
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('sprites', function () {
  var iconData = gulp.src('src/img/icon/*.png')
    .pipe(spritesmith({
      engine: 'pngsmith',
      imgName: 'sprite-icon.png',
      cssName: 'sprite-icon.css',
      cssTemplate: '2x-sprite.template.mustache',
      cssVarMap: function (item) {
        item.x /= 2;
        item.y /= 2;
        item.width /= 2;
        item.height /= 2;
        item.total_width /= 2;
        item.total_height /= 2;
        item.image = '/img/' + item.image;
        item.name = item.name.replace(/_/g, '-');
      }
    }));

  iconData.img.pipe(gulp.dest('src/img/'));
  iconData.css.pipe(gulp.dest('src/css/'));
});

gulp.task('copy-image', function () {
    gulp.src('src/img/*.png')
      .pipe(gulp.dest('dist/img/'));
});


gulp.task('connect', function() {
  connect.server({
      root: 'dist',
      port: 9999,
      livereload: true
  });
});

gulp.task('reload', function() {
  gulp.src('src/*.html')
    .pipe(connect.reload());  
});

gulp.task('watch', function() {
  gulp.watch(['src/**/*.html'], ['copy-html', 'reload']);
  gulp.watch(['src/js/*.js'], ['copy-js', 'reload']);
  gulp.watch(['src/css/*.css'], ['copy-css', 'reload']);
});
