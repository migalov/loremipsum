import gulp from 'gulp';

// Configuration
import path from './config/path.js';
import app from './config/app.js';

// Tasks
import browserSync from 'browser-sync';
import clear from './tasks/clear.js';
import twig from './tasks/twig.js';
import scss from './tasks/scss.js';
import js from './tasks/js.js';
import img from './tasks/img.js';
import font from './tasks/font.js';
import server from './tasks/server.js';
import inlineStyle from './tasks/inlineStyle.js';
import favicons from './tasks/favicons.js';
import libraries from './tasks/libraries.js';

// Observation
const watcher = () => {
   gulp.watch(path.twig.watch, twig).on("all", browserSync.reload);
   gulp.watch(path.scss.watch, scss).on("all", browserSync.reload);
   gulp.watch(path.js.watch, js).on("all", browserSync.reload);
   gulp.watch(path.img.watch, img).on("all", browserSync.reload);
   gulp.watch(path.font.watch, font).on("all", browserSync.reload);
}

// Build
const build = gulp.series(
   clear,
   gulp.parallel(twig, scss, js, img, font, favicons, libraries),
   inlineStyle
);

// Development
const dev = gulp.series(
   build,
   gulp.parallel(server, watcher)
);

// Public Tasks
export { twig, scss, js, img, font, clear, inlineStyle, favicons, libraries };

// Assembly
export default app.isProd ? build : dev;