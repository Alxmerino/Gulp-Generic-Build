'use strict';

let newer    = require('gulp-newer');
let imagemin = require('gulp-imagemin');

function imageOptimizeTask() {
    let gulp = this;
    let src = gulp.config.source;
    let dest = gulp.config.dest;

    return gulp.src(src.img + '/**')
        .pipe(newer(dest.img))
        .pipe(imagemin())
        .pipe(gulp.dest(dest.img));
}

module.exports = imageOptimizeTask;
