import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import browserSync from 'browser-sync';

import { DIST_DIR, SOURCE_DIR } from './const.js';

export const html = () =>
    gulp.src(`${SOURCE_DIR}/*.html`, { base: SOURCE_DIR })
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(DIST_DIR))
        .pipe(browserSync.stream());
