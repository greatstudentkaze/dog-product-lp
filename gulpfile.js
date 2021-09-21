import gulp from 'gulp';

import { build } from './gulp/build.js';
import { server } from './gulp/server.js';
import { watcher } from './gulp/watcher.js';

export default gulp.series(
  build,
  server,
  watcher,
);
