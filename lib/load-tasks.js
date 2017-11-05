'use strict';

const gutil         = require('gulp-util');
const path          = require('path');
const taskPath      = path.dirname(__dirname) + '/tasks';
const loadFiles     = require('./load-files');
const registerTasks = require('./register-tasks');

/**
 * @desc Loads up the available tasks files and
 *       registers them as gulp tasks
 * @param  {Object} gulp
 * @param  {Object} config
 */
function loadTasks(gulp, config) {
    // Bail early if no config file
    if (typeof(config) === 'undefined') {
        // @TODO Try to use gutil.PluginError instead
        gutil.log('You must provide a config file path');
    }

    // Define run sequense here so it registers with the given gulp instance
    let runSequence  = require('run-sequence').use(gulp);

    // Load task files
    let files = loadFiles(taskPath);

    /**
     * Get JSON from config file and assign it to
     * gulp object so we can access it on tasks
     */
    gulp.config = require(config);

    // Register task files
    gulp = registerTasks(gulp, files);

    // Kickoff default task
    gulp.task('default', () => {
        let gulpTasks = typeof(gulp.config.tasks) !== 'undefined' ? gulp.config.tasks : ['cleanup', 'scss', 'watch'];
        runSequence.apply(undefined, gulpTasks);
    });
}

module.exports = loadTasks;
