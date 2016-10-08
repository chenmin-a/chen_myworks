var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var fontSpider = require('gulp-font-spider');
var imagemin = require('gulp-imagemin');
var webserver = require('gulp-webserver');
var clean = require('gulp-clean');


//清除 dist
gulp.task('clean',function () {
	gulp.src(['./static/dist/'])
		.pipe(clean())
})

//css 压缩
gulp.task("css", function () {
	gulp.src(['./static/src/css/*.css'])
		.pipe(cssmin())
		.pipe(rename({
			suffix: ".min"
		}))
		.pipe(gulp.dest("./static/dist/css/"))
})

//js 压缩
gulp.task("js", function () {
	gulp.src(['./static/src/js/**/*.js'])
		.pipe(uglify({
            mangle: true,//类型：Boolean 默认：true 是否修改变量名
        }))
		.pipe(rename({
			suffix: ".min"
		}))
		.pipe(gulp.dest("./static/dist/js/"))
})

//图片压缩
gulp.task('images', function () {
    return gulp.src('./static/src/images/*')
		.pipe(imagemin())
        .pipe(gulp.dest('./static/dist/images/'));
});


//恢复为未压缩字体，用于压缩
gulp.task('fontBack', function () {
    return gulp.src('./static/src/font/.font-spider/*.ttf')
        .pipe(gulp.dest('./static/src/font'));
});

//font-spider
gulp.task('fontComp', function () {
    return gulp.src('./static/src/font/inde.html')
        .pipe(fontSpider());
});
//字体压缩
gulp.task('font',function () {
	gulp.run(['fontBack', 'fontComp', 'fontMove'])
})

//移动已经压缩的字体文件至dist文件夹供页面引用
gulp.task('fontMove', function () {
    return gulp.src('./static/src/font/*.ttf')
        .pipe(gulp.dest('./static/dist/font'));
});

//启动本地服务器
gulp.task('web', function() {
  gulp.src('')
    .pipe(webserver({
	  host:'127.0.0.1',
	  port:'8080',
      livereload: true,
      directoryListing: true,
      open: 'static/index.html',
    }));
});

gulp.task('default', ['css', 'js','images', 'font'])
// gulp.task('default', ['css', 'js','images', 'font','webserver'])