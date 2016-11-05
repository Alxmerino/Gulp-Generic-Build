/**
 * Compiles SCSS into CSS
 * @author Rene Merino <rmerino@amayamedia.com>
 */
'use strict';

const gutil        = require('gulp-util');
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps   = require('gulp-sourcemaps');
var notify         = require("gulp-notify");

const sassOptions  = {
    errLogToConsole: true,
    outputStyle: 'compressed'
};
const autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%'],
    cascade: false
}

function ScssTask() {
    const gulp = this;
    const src = gulp.config.source;
    const dest = gulp.config.dest;

    return gulp.src(src.scss + '/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(
            sass(sassOptions)
            .on('error', sass.logError)
        )
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(
            gulp.dest(dest.css)
        )
        .pipe(notify("SCSS - Build Complete"));
}

module.exports = ScssTask;
