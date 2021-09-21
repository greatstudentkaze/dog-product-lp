import gulp from 'gulp';

import { SOURCE_DIR } from './const.js';

import { copy } from './copy.js';
import { html } from './html.js';
import { js } from './js.js';
import { styles } from './styles.js';

export const watcher = () => {
    gulp.watch(`${SOURCE_DIR}/scss/**/*.scss`, gulp.series(styles));
    gulp.watch(`${SOURCE_DIR}/*.html`, gulp.series(html));
    gulp.watch(`${SOURCE_DIR}/js/**/*.js`, gulp.series(js));
    gulp.watch(`${SOURCE_DIR}/img/**/*.*`, gulp.series(copy));
};