let gulp = require('gulp');
let browserSync = require('browser-sync').create();
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let babel = require('gulp-babel');
let cleanCSS = require('gulp-clean-css');
let sourcemaps = require('gulp-sourcemaps');


gulp.task('sass', function () {
   return gulp.src('src/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest("src/"))
      .pipe(browserSync.stream());
});

gulp.task('serve', gulp.series('sass', function () {

   browserSync.init({
      server: "./src"
   });

   gulp.watch('src/**/*.scss', gulp.series('sass'));
   gulp.watch("src/*.html").on('change', browserSync.reload);
   gulp.watch("src/js/*.js").on('change', browserSync.reload);
}));


gulp.task('distHTML', () =>
   gulp.src('src/index.html')
      .pipe(gulp.dest('public/'))
);

gulp.task('distJS', () => gulp.src(
   [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'src/js/*.js'
   ])
   .pipe(babel({ presets: ['@babel/preset-env'] }))
   .pipe(gulp.dest('public/js'))
);

gulp.task('distImages', () =>
   gulp.src('src/images/*')
      .pipe(gulp.dest('public/images'))
);

gulp.task('distFonts', () =>
   gulp.src('src/fonts/*')
      .pipe(gulp.dest('public/fonts'))
);

gulp.task('autoprefixer', () =>
   gulp.src('src/styles/styles.css')
      .pipe(autoprefixer({
         cascade: false
      }))
      .pipe(gulp.dest('public/styles'))
);

gulp.task('minify-css', () => {
   return gulp.src('public/styles/styles.css')
      .pipe(sourcemaps.init())
      .pipe(cleanCSS())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('public/styles'));
});

gulp.task("build", (gulp.series('distHTML', 'distJS', 'distImages', 'distFonts', 'autoprefixer', 'minify-css')));

gulp.task("default", (gulp.series("serve")));