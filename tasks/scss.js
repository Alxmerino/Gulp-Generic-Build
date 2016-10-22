/**
 * Compiles SCSS into CSS
 * @author Rene Merino <rmerino@amayamedia.com>
 */
'use strict';

const gutil = require('gulp-util');
const sass  = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function ScssTask() {
    const gulp = this;
    const src = gulp.config.source;
    const dest = gulp.config.dest;

    return gulp.src(src.scss + '/**/*.scss')
        .pipe(
            sass({
                outputStyle: 'compressed'
            })
            .on('error', sass.logError)
        )
        .pipe(
            autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            })
        )
        .pipe(
            gulp.dest(dest.css)
        );
}

module.exports = ScssTask;
