var gulp = require('gulp');

var day = '2015101514';

// 引入组件
var sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    browserify = require('gulp-browserify'),
    notify = require('gulp-notify'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    zip = require('gulp-zip');
    port = process.env.port || 5000;




// live reload
gulp.task('connect',function(){
    connect.server({
        // root:'./',
        port: port,
        livereload: true,
    })
});


//编译Sass，Autoprefix及缩小化
gulp.task('sass', function() {
    return gulp.src('./'+ day +'/src/scss/main.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('./'+ day +'/dist/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('./'+ day +'/'))
        .pipe( connect.reload() )
        .pipe(notify({ message: 'Styles  task complete' }));

});

gulp.task('html',function(){
    gulp.src('./'+ day +'/*.html')
        .pipe( connect.reload() )
});

gulp.task('scripts',function(){
    return gulp.src('./'+ day +'/src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./'+ day +'/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('./'+ day +'/js/'))
        .pipe( connect.reload() )
        .pipe(notify({ message: 'Scripts task complete' }));

});


//zip
gulp.task('zip', function () {
    return gulp.src(['./'+ day +'/main.min.css','./'+ day +'/host.html'])
        .pipe(zip('special'+ day +'.zip'))
        .pipe(gulp.dest(''+ day +''))
        .pipe(notify({ message: 'zip task complete' }));
});



/* 监听 文件变化  */

gulp.task('watch', function() {

    // 看守.scss 档
    gulp.watch('./'+ day +'/src/scss/*.scss', ['sass']);

    // 看守所有.js档
    gulp.watch('./'+ day +'/*.js', ['scripts']);
    gulp.watch('./'+ day +'/src/js/*.js', ['html','scripts']);

    // 看守所有.html
    gulp.watch('./'+ day +'/*.html',['html','zip']);

});

gulp.task('serve',['connect','watch']);
