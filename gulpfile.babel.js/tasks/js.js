import gulp from "gulp";

// Config
import path from "../config/path.js";
import app from "../config/app.js";

// Plugins
import webpack from "webpack-stream";
import loadPlugins from "gulp-load-plugins";
import gulpif from "gulp-if";
const gp = loadPlugins();

export default () => {
   return gulp.src(path.js.src, {sourcemaps: app.isDev})
      .pipe(gp.plumber({
         errorHandler: gp.notify.onError(error => ({
            title: "JS",
            message: error.message
         }))
      }))
      .pipe(gp.size({title: "JS"}))
      .pipe(gp.babel())
      .pipe(webpack(app.webpack))
      .pipe(gulpif(app.isProd, gp.rename({ suffix: ".min" })))
      .pipe(gulp.dest(path.js.dest, {sourcemaps: app.isDev}))
      .pipe(gp.size({title: "JS"}))
}