const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const babel = require('gulp-babel');
const notify = require('gulp-notify');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const browserSync = require('browser-sync');


gulp.task('browser', () => {
  browserSync({
    server: { baseDir: './' },
    notify: false,
  });
});

gulp.task('sass', () => {
  return gulp.src('./src/sass/**/*.(sass|scss)')
    .pipe(sass({ outputStyle: 'expand' }).on('error', notify.onError()))
    .pipe(postcss())
    .pipe(cssnano())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('js', () => {
  return gulp.src([
      './src/js/fetch.js',
      './src/js/vibrant.js',
      './src/js/main.js',
    ])
    .pipe(concat('main.js'))
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('img', () => {
  return gulp.src('./src/img/**/*')
    .pipe(cache(imagemin()))
    .pipe(gulp.dest('./dist/img'));
});

gulp.task('watch', ['img', 'sass', 'js', 'browser'], () => {
  gulp.watch('./src/js/**/*', ['js']);
  gulp.watch('./src/sass/**/*', ['sass']);
  gulp.watch('./*.html', browserSync.reload);
});

gulp.task('build', ['img', 'sass', 'js']);

gulp.task('default', ['watch']);
