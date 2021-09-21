import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sourcemap from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import browserSync from 'browser-sync';
import gulpSass from 'gulp-sass';
import nodeSass from 'node-sass';

import { DIST_DIR, SOURCE_DIR } from './const.js';

const sass = gulpSass(nodeSass);

export const styles = () =>
    gulp.src(`${SOURCE_DIR}/scss/style.scss`)
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest(`${DIST_DIR}/css`))
        .pipe(csso())
        .pipe(rename('style.min.css'))
        .pipe(sourcemap.write('.'))
        .pipe(gulp.dest(`${DIST_DIR}/css`))
        .pipe(browserSync.stream());
