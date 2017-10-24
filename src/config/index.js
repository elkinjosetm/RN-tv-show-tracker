import { merge } from 'lodash';
import base from './base';
import local from './local';

// Ignore localSettings for release build
export default merge({}, base, __DEV__ ? local : {});
