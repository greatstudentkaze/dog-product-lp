import del from 'del';

import { DIST_DIR } from './const.js';

export const clean = () => del(DIST_DIR);
