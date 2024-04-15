// Initialize modules
<<<<<<< HEAD
const { src, dest, watch, series, parallel } = require("gulp");
const fileinclude = require("gulp-file-include");
const browserSync = require("browser-sync").create();
const purgecss = require("gulp-purgecss");

// File paths
const files = {
  distPath: "./dist",
  cssPath: "./src/styles/css/*.css",
  disthtmlPath: "./dist/**/*.html", // CSS 파일 경로 수정
  htmlPath: "./src/html/**/*.html",
  htmlPartialsPath: "./src/Include/**/*.html", // 폴더명 오타 수정
  jsDirPath: "./src/js/*.js",
  imgSrcPath: "./src/styles/images/*.{jpg,png,gif,svg}",
  imgDestPath: "./dist/styles/images",
=======
const { src, dest, watch, series, parallel } = require('gulp');
const fileinclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();
const purgecss = require('gulp-purgecss');

// File paths
const files = {
  distPath: './dist',
  cssPath: './src/styles/css/*.css',
  disthtmlPath: './dist/**/*.html', // CSS 파일 경로 수정
  htmlPath: './src/html/**/*.html',
  htmlPartialsPath: './src/Include/**/*.html', // 폴더명 오타 수정
  jsDirPath: './src/js/*.js',
  imgSrcPath: './src/styles/images/*.{jpg,png,gif,svg}',
  imgDestPath: './dist/styles/images'
>>>>>>> b5757a9 (gulpfile 세팅)
};

// Task to include HTML partials
function fileincludeTask() {
<<<<<<< HEAD
  return src([files.htmlPath, "!./src/htmlInclude/*.html"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
=======
  return src([files.htmlPath, '!./src/htmlInclude/*.html'])
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: '@file'
>>>>>>> b5757a9 (gulpfile 세팅)
      })
    )
    .pipe(dest(files.distPath));
}

function javascriptTask() {
  return (
    src(files.jsDirPath)
      // .pipe(sourcemaps.init()) // initialize sourcemaps first
      //.pipe(sass(scssOptions)) // compile SCSS to CSS
      //.pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
      // .pipe(sourcemaps.write())
<<<<<<< HEAD
      .pipe(dest(files.distPath + "/js"))
=======
      .pipe(dest(files.distPath + '/js'))
>>>>>>> b5757a9 (gulpfile 세팅)
  ); // put final CSS in dist folder
}

// Task to start BrowserSync server
function browsersyncTask() {
  // 함수명 오타 수정
  var options = {
    browserSync: {
      server: {
        baseDir: files.distPath,
<<<<<<< HEAD
        directory: true,
      },
      open: "external",
    },
=======
        directory: true
      },
      open: 'external'
    }
>>>>>>> b5757a9 (gulpfile 세팅)
  };
  if (true) {
    browserSync.init(options.browserSync);

    watch([files.htmlPath, files.htmlPartialsPath], series(fileincludeTask));
<<<<<<< HEAD
    watch(files.htmlPath).on("change", browserSync.reload);
    watch(files.htmlPartialsPath).on("change", browserSync.reload);
    watch(files.jsDirPath).on("change", browserSync.reload);
=======
    watch(files.htmlPath).on('change', browserSync.reload);
    watch(files.htmlPartialsPath).on('change', browserSync.reload);
    watch(files.jsDirPath).on('change', browserSync.reload);
>>>>>>> b5757a9 (gulpfile 세팅)
  }
}
// Task to purge unused CSS using purgecss
function purgeCssTask() {
  return src(files.cssPath)
    .pipe(
      purgecss({
<<<<<<< HEAD
        content: [files.htmlPath, files.htmlPartialsPath, files.jsDirPath], 
        whitelist: ["nav_fold", "nav_container", "nav_fold nav .nav_container"], 
      })
    )
    .pipe(dest(files.distPath + "/styles/css"));
=======
        content: [files.htmlPath, files.htmlPartialsPath, files.jsDirPath],
        whitelist: ['nav_fold', 'nav_container', 'nav_fold nav .nav_container']
      })
    )
    .pipe(dest(files.distPath + '/styles/css'));
>>>>>>> b5757a9 (gulpfile 세팅)
}

// Task to move images to dist folder
function imageTask() {
  return src(files.imgSrcPath).pipe(dest(files.imgDestPath));
}

// Default task
exports.default = series(
  parallel(fileincludeTask, imageTask, javascriptTask),
  purgeCssTask,
  browsersyncTask // 함수명 오타 수정
);
