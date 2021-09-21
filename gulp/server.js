import browserSync from 'browser-sync';

import { DIST_DIR } from './const.js';

browserSync.create();

export const server = (done) => {
    browserSync.init({
        server: {
            baseDir: DIST_DIR
        },
        cors: true,
        notify: false,
        ui: false,
    });
    done();
};