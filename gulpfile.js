var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');

gulp.task('sass', function () {
   return gulp.src('src/scss/*.scss')
      .pipe(sass())
      .pipe(gulp.dest("src/css"))
      .pipe(browserSync.stream());
});

gulp.task('serve', gulp.series('sass', function () {

   browserSync.init({
      server: "./src"
   });

   gulp.watch('src/scss/*.scss', gulp.series('sass'));
   gulp.watch("src/*.html").on('change', browserSync.reload);
   gulp.watch("src/js/*.js").on('change', browserSync.reload);
}));

gulp.task('autoprefixer', () =>
   gulp.src('src/css/style.css')
   .pipe(autoprefixer({
      browsers: ["last 3 versions", "> 2%"],
      cascade: false
   }))
   .pipe(gulp.dest('dist/css'))
);

gulp.task("default", (gulp.series("serve")));