/**
 * Optimize newly added images
 */

'use strict';

let newer    = require('gulp-newer');
let imagemin = require('gulp-imagemin');
let pngquant = require('imagemin-pngquant');

function imageOptimizeTask() {
    let gulp = this;
    let src = gulp.config.source;
    let dest = gulp.config.dest;

    return gulp.src(src.img + '/**')
        .pipe(newer(dest.img))
        .pipe(imagemin({
            progressive: true,
            sgvoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(dest.img));
}

module.exports = imageOptimizeTask;
