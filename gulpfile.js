var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var shell = require('gulp-shell');

// gulp.task('webpack', function(){
//   return gulp.src('*.js', {read: false})
//   .pipe(shell([
//     'webpack'
//   ]))
//   .pipe(browserSync.stream())
// });

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream())
});

gulp.task('sass:minify', function () {
  return gulp.src('./public/css/*.css')
  .pipe(sourcemaps.init())
  .pipe(cleanCSS())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./public/css'))
});

gulp.task('browser-sync', function(){
  browserSync.init({
    server: './public',
    notify: false,
    open: false
  })
})



gulp.task('default', ['sass', 'browser-sync'], function(){
  gulp.watch('./src/scss/**/*', ['sass']);
  gulp.watch('./src/scss/projects/**/*', ['sass']);
  gulp.watch('./src/js/**/*', ['webpack']);
  gulp.watch('./public/*.html', reload);
  gulp.watch('./public/projects/*.html', reload);
});

gulp.task('production', ['sass:minify'])