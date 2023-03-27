import gulp from "gulp";

// Config
import path from "../config/path.js";

export default () => {
   return gulp.src(`${path.src}/favicons/**/*`)
      .pipe(gulp.dest(`${path.root}`))
}