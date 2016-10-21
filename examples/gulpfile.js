'use strict';

let configFile  = __dirname + '/configs/config.json';
let gulp        = require('gulp');
let gulpTasks   = require('gulp-generic-build')(gulp, configFile);
