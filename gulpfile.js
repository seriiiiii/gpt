// Initialize modules
const { src, dest, watch, series, parallel } = require("gulp");
const fileinclude = require("gulp-file-include");
const browserSync = require("browser-sync").create();
const purgecss = require("gulp-purgecss");

// File paths
const files = {
  distPath: "./dist",
  cssPath: "./src/styles/css/*.css",
  disthtmlPath: "./dist/**/*.html",
  htmlPath: "./src/html/**/*.html",
  htmlPartialsPath: "./src/htmlPartials/**/*.html",
  jsDirPath: "./src/js/*.js",
  // imgSrcPath: "./src/styles/images/*.{jpg,png,gif,svg}",
  // imgDestPath: "./dist/styles/images",
};

// Task to include HTML partials
function fileincludeTask() {
  return src([files.htmlPath, "!./src/htmlPartials/*.html"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
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
      .pipe(dest(files.distPath + "/js"))
  ); // put final CSS in dist folder
}

// Task to start BrowserSync server
function browsersyncTask() {
  var options = {
    browserSync: {
      server: {
        baseDir: files.distPath,
        directory: true,
      },
      open: "external",
    },
  };
  if (true) {
    browserSync.init(options.browserSync);

    watch([files.htmlPath, files.htmlPartialsPath], series(fileincludeTask));
    watch(files.htmlPath).on("change", browserSync.reload);
    watch(files.htmlPartialsPath).on("change", browserSync.reload);
    watch(files.jsDirPath).on("change", browserSync.reload);
  }
}
// Task to purge unused CSS using purgecss
function purgeCssTask() {
  return src(files.cssPath)
    .pipe(
      purgecss({
        content: [files.htmlPath, files.htmlPartialsPath, files.jsDirPath],
        // whitelist: ["nav_fold", "nav_container", "nav_fold nav .nav_container"],
      })
    )
    .pipe(dest(files.distPath + "/styles/css"));
}

// Task to move images to dist folder
// function imageTask() {
//   return src(files.imgSrcPath).pipe(dest(files.imgDestPath));
// }

// Default task
exports.default = series(
  parallel(fileincludeTask, javascriptTask),
  purgeCssTask,
  browsersyncTask
);
