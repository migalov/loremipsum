import gulp from "gulp";

// Config
import path from "../config/path.js";

export default () => {
   return gulp.src(path.js.srcLibraries)
      .pipe(gulp.dest(path.js.dest))
}