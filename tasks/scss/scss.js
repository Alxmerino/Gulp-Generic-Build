/**
 * Compiles SCSS into CSS
 * @author Rene Merino <rmerino@amayamedia.com>
 */

'use strict';

const gutil        = require('gulp-util');
const gulpif       = require('gulp-if');
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps   = require('gulp-sourcemaps');
const notify         = require("gulp-notify");
let isProd = false;
let isDev = true;

const sassOptions = {
    errLogToConsole: true,
    outputStyle: 'compressed'
};

const autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%'],
    cascade: false
};

function ScssTask() {
    const gulp = this;
    const src = gulp.config.source;
    const dest = gulp.config.dest;

    // If "production" or "prod" is passed from the command line then update the defaults
    if(gutil.env.prod || gutil.env.production) {
        isDev = false;
        isProd = true;
    }

    return gulp.src(src.scss + '/**/*.scss')
        .pipe(gulpif(isDev, sourcemaps.init()))
        .pipe(
            sass(sassOptions)
            .on('error', sass.logError)
        )
        .pipe(gulpif(isProd, autoprefixer(autoprefixerOptions)))
        .pipe(gulpif(isDev, sourcemaps.write('.')))
        .pipe(
            gulp.dest(dest.css)
        )
        .pipe(gulpif(isProd, notify("SCSS - Build Complete")));
}

module.exports = ScssTask;
