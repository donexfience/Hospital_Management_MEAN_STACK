const gulp = require('gulp');
const postcss = require('gulp-postcss');

gulp.task('styles', function () {
  return gulp.src('src/styles/*.css') 
    .pipe(postcss())
    .pipe(gulp.dest('dist/styles')); 
});

gulp.task('default', gulp.series('styles'));
