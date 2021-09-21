import gulp from 'gulp';

import { clean } from './clean.js';
import { copy } from './copy.js';
import { html } from './html.js';
import { js } from './js.js';
import { styles } from './styles.js';

export const build = gulp.series(
    clean,
    copy,
    styles,
    html,
    js,
);
