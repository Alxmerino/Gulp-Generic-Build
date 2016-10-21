/**
 * Compiles SCSS into CSS
 * @author Rene Merino <rmerino@amayamedia.com>
 */
'use strict';

let gutil = require('gulp-util');
let sass  = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');

function ScssTask() {
    let gulp = this;
    let src = gulp.config.source;
    let dest = gulp.config.dest;

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
