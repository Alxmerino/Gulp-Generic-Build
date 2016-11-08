/**
 * Run other tasks when watched files are modified.
 * @author Rene Merino <rmerino@amayamedia.com>
 */
'use strict';

module.exports = function WatchTask() {
    let gulp = this;
    let srcScss = gulp.config.source.scss;
    let srcJs = gulp.config.source.js;

    gulp.watch(srcScss + '/**/*.scss', ['scss']);
    gulp.watch(srcJs + '/**/*.js', []);
}
