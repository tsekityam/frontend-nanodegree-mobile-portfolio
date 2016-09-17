var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var imageResize = require('gulp-image-resize');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');

gulp.task('default', ['copy']);

gulp.task('copy', ['copy-html', 'copy-views-html', 'copy-css', 'copy-views-css', 'copy-js', 'copy-views-js', 'copy-img', 'copy-and-resize-views-images']);

gulp.task('copy-html', function() {
  gulp.src('./*.html')
  .pipe(gulp.dest('./docs/'));
});

gulp.task('copy-views-html', function() {
  gulp.src('./views/*.html')
  .pipe(gulp.dest('./docs/views/'));
});

gulp.task('copy-css', function() {
  gulp.src('./css/*.css')
  .pipe(gulp.dest('./docs/css/'));
});

gulp.task('copy-views-css', function() {
  gulp.src('./views/css/*.css')
  .pipe(gulp.dest('./docs/views/css/'));
});

gulp.task('copy-js', function() {
  gulp.src('./js/*.js')
  .pipe(gulp.dest('./docs/js/'));
});

gulp.task('copy-views-js', function() {
  gulp.src('./views/js/*.js')
  .pipe(uglify())
  .pipe(rename({
    suffix: '-min'
  }))
  .pipe(gulp.dest('./docs/views/js'));
});

gulp.task('copy-img', function() {
  gulp.src('img/*')
  .pipe(imagemin({
    progressive: true,
    use: [pngquant()]
  }))
  .pipe(gulp.dest('./docs/img/'));
});

gulp.task('copy-views-images', function(cb) {
  return gulp.src('views/images/*')
  .pipe(imagemin({
    progressive: true,
    use: [pngquant()]
  }))
  .pipe(gulp.dest('./docs/views/images/'));
});

gulp.task('resize-pizzeria-views-images', ['copy-views-images'], function(cb) {
  // views/images/*.jpg have been copied to the output path, and we are going to
  // resize views/images/pizzeria.jpg to 750px, which is it's max size will be used.
  return gulp.src('./docs/views/images/pizzeria.jpg')
  .pipe(imageResize({ width: 750 }))
  .pipe(imagemin({
    progressive: true
  }))
  .pipe(gulp.dest('./docs/views/images/'))
  cb();
});

gulp.task('copy-and-resize-views-images', ['resize-pizzeria-views-images'], function() {
  // images are all ready, however, we don't have to use pizzeria.jpg in 750px
  // in index.html, so we duplicate it and set the new image to 100px, which is
  // it's max size in index.html
  gulp.src('./docs/views/images/pizzeria.jpg')
  .pipe(imageResize({ width: 100 }))
  .pipe(imagemin({
    progressive: true
  }))
  .pipe(rename({
    suffix: '@100px'
  }))
  .pipe(gulp.dest('./docs/views/images/'));
});
