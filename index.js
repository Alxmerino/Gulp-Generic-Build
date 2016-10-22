/**
 * Entry point to load commonly used tasks
 *
 * @author Rene Merino <rmerino@amayamedia.com>
 */

'use strict';

const fs           = require('fs');
const gutil        = require('gulp-util');
const taskPath     = __dirname + '/tasks/';
const taskList     = fs.readdirSync(taskPath);

/**
 * Reads the path to a config file and returns it as JSON
 * @param  {String} configFile
 * @return {Object}
 */
let getConfigJSON = (configFile) => {
    return JSON.parse(fs.readFileSync(configFile));
}


/**
 * Get the config data and load all available tasks
 * @param {Object} gulp
 * @param {String} config
 */
function LoadTasks(gulp, config) {
    // Bail early if no config file
    if (typeof(config) === 'undefined') {
        // @TODO Try to use gutil.PluginError instead
        gutil.log('You must provide a config file path');
    }

    // Define run sequense here so it registers with the given gulp instance
    let runSequence  = require('run-sequence').use(gulp);

    /**
     * Get JSON from config file and assign it to
     * gulp object so we can access it on tasks
     */
    gulp.config = getConfigJSON(config);

    // Loop through task files and assign as gulp tasks
    taskList.forEach((taskFile) => {
        // Strips `.js` from the task file
        let taskName = taskFile.substr(0, taskFile.length-3);

        // Require the task function
        let taskFunc = require(taskPath + taskFile);

        // Register the actual task
        gulp.task(taskName, taskFunc);
    });

    // Lets kickoff gulp
    gulp.task('default', () => {
        runSequence(/*'cleanup', */'scss');
    });
}

module.exports = LoadTasks
