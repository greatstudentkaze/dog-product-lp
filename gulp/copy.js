import gulp from 'gulp';

import { DIST_DIR, SOURCE_DIR } from './const.js';

export const copy = () =>
    gulp.src([
        `${SOURCE_DIR}/fonts/**/*.{woff,woff2}`,
        `${SOURCE_DIR}/img/**`,
        `${SOURCE_DIR}/*.ico`
    ], { base: SOURCE_DIR })
        .pipe(gulp.dest(DIST_DIR));
