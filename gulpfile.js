// See: https://thesocietea.org/2016/01/building-es6-javascript-for-the-browser-with-gulp-babel-and-more/

var gulp         = require('gulp');
var del          = require('del');
var source       = require('vinyl-source-stream');
var buffer       = require('vinyl-buffer');
var zopfli       = require('gulp-zopfli');
var webserver    = require('gulp-webserver');
var plumber      = require('gulp-plumber');

// Javascript
var browserify   = require('browserify');
var babelify     = require('babelify');
var uglify       = require('gulp-uglify');
var sourcemaps   = require('gulp-sourcemaps');

// LESS / CSS processing
var less         = require('gulp-less');
var uncss        = require('gulp-uncss');
var autoprefixer = require('gulp-autoprefixer');
var cssnano      = require('gulp-cssnano');

// TODO: SRI: subresource integrity

gulp.task('clean', function() {
    del.sync('./dist/**/*');
});

gulp.task('html', function () {
    return gulp.src('./src/**/*.html')
        .pipe(plumber())
        // .pipe(zopfli())
        .pipe(gulp.dest('./dist'))
});

gulp.task('js', function () {
    return browserify({
            entries: './src/js/app.js',
            debug: true
        })
        .transform("babelify", { presets: ["es2015"] })
        .bundle()
        .on('error', function(err) {
            console.error(err.message);
            this.emit('end');
        })
        .pipe(plumber())
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        //.pipe(uglify())
        .pipe(sourcemaps.write('./maps'))
        // .pipe(zopfli())
        .pipe(gulp.dest('./dist/js'))
});

gulp.task('css', function () {
    return gulp.src('./src/less/app.less')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(less())
        //.pipe(uncss({
        //    ignore: ['.btn[disabled]'],
        //    html: ['./src/*.html']
        //}))
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(sourcemaps.write('./maps'))
        // .pipe(zopfli())
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('watch', ['html', 'js', 'css'], function () {
    gulp.watch('./src/**/*.html', ['html', 'css']);
    gulp.watch('./src/**/*.js', ['js']);
    gulp.watch('./src/**/*.less', ['css']);
});

gulp.task('start_server', ['html', 'js', 'css'], function(done) {
    return gulp.src('./dist/')
    .pipe(webserver({
        livereload: true,
        fallback: 'index.html',
        https: true,
        port: 8080,
    }));
});

gulp.task('build', ['clean', 'html', 'js', 'css']);
gulp.task('serve', ['build', 'watch', 'start_server']);
gulp.task('default', ['serve']);
