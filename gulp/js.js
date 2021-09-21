import gulp from 'gulp';
import webpack from 'webpack-stream';
import browserSync from 'browser-sync';

import { DIST_DIR, SOURCE_DIR } from './const.js';

const webpackConfig = {
  mode: 'production',
  entry: {
    script: `./${SOURCE_DIR}/js/script.js`,
  },
  output: {
    filename: '[name].min.js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};

export const js = () =>
  gulp.src(`${SOURCE_DIR}/js/**/*.js`)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(`${DIST_DIR}/js`))
    .pipe(browserSync.stream());
