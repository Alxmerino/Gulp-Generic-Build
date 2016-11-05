'use strict';

const path = require('path');

/**
 * @desc Registers the tasks files into the given gulp
 *       instance
 *
 * @param  {Object} gulp
 * @param  {Array} taskFiles
 * @return {Object}
 */
function registerTasks(gulp, taskFiles) {
    if (!taskFiles.length) {
        return gulp;
    }

    taskFiles.forEach((filePath) => {
        let taskName = path.parse(filePath).name;

        gulp.task(taskName, require(filePath));
    });

    return gulp;
}

module.exports = registerTasks;
