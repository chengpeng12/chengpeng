//引入gulp
const gulp = require("gulp");
//html的拷贝

gulp.task("index-html",function(){
	return gulp.src("index.html")
	.pipe(gulp.dest("file"))
	.pipe(connect.reload())
})
gulp.task("copy-html",function(){
	return gulp.src(["*.html,!index.html"])
	.pipe(gulp.dest("file/html"))
	.pipe(connect.reload())
})
//图片拷贝
gulp.task("images",function(){
	return gulp.src("images/*[.jpg,.png]")
	.pipe(gulp.dest("file/images"))
	.pipe(connect.reload())
})
//数据拷贝
gulp.task("data",function(){
	return gulp.src(["*.json","!package.json"])
	.pipe(gulp.dest("file/json"))
	.pipe(connect.reload())
})
//拷贝js文件
gulp.task("copy-js",function(){
	return gulp.src(["*.js","!gulpfile.js"])
	.pipe(gulp.dest("file/js"))
	.pipe(connect.reload())
})

gulp.task("build",["index-html","copy-html","images","data","copy-js"],function(){
	console.log("编译完成")
})
//引入scss文件
const scss = require("gulp-scss");
const minifyCss = require("gulp-minify-css");
const rename = require("gulp-rename")
gulp.task("scss",function(){
	return gulp.src("*.scss")
	.pipe(scss())
	.pipe(gulp.dest("file/css"))
	.pipe(connect.reload())
	.pipe(minifyCss())
	.pipe(rename(function(path){
		path.basename += ".min";
		path.extname = ".css";
	}))

	.pipe(gulp.dest("file/css"))
	.pipe(connect.reload())
})

//添加监听
gulp.task("watch",function(){
	gulp.watch("index.html",["index-html"]);
	gulp.watch(["*.html,!index.html"],["copy-html"]);
	gulp.watch("images/*[.jpg,.png]",["images"]);
	gulp.watch(["*.json","!package.json"],["data"]);
	gulp.watch(["*.js","!gulpfile.js"],["copy-js"]);
	gulp.watch("*.scss",["scss"]);
})
//实时刷新
const connect = require("gulp-connect");
gulp.task("server",function(){
	connect.server({
		root: "file",
		port: 33333,
		livereload: true
	})
})

//设置默认任务
gulp.task("default",["watch","server"]);
