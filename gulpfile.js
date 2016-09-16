var gulp = require('gulp');

gulp.task('default', ['copy']);

gulp.task('copy', ['copy-html', 'copy-views-html', 'copy-css', 'copy-views-css', 'copy-js', 'copy-views-js', 'copy-img', 'copy-views-images']);

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
  .pipe(gulp.dest('./docs/views/js'));
});

gulp.task('copy-img', function() {
  gulp.src('img/*')
  .pipe(gulp.dest('./docs/img/'));
});

gulp.task('copy-views-images', function() {
  gulp.src('views/images/*')
  .pipe(gulp.dest('./docs/views/images/'));
});
