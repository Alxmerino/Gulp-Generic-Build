/**
 * @desc Load the files that need to be register as
 *       tasks.
 *
 * @return {Array}
 */
'use strict';

const fs        = require('fs');
const path      = require('path');
const helpers   = require('./helpers');

function loadFiles(rootDir) {
    if (helpers.isFile(rootDir)) {
        return [];
    }

    let files = fs.readdirSync(rootDir);
    files = files.map((filename) => {
        let filePath = path.join(rootDir, filename);
        let fileExt = helpers.getFileExt(filename);

        if (helpers.isFile(filename) && fileExt === '.js') {
            return filePath;
        }

        if (helpers.isDirectory(filename)) {
            return loadFiles(filePath);
        }
    });

    // Clean up files array
    // http://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays-in-javascript
    // Could also use underscore
    files = [].concat.apply([], files);
    files = files.filter((file) => {
        return (typeof(file) !== 'undefined');
    });

    return files;
}

module.exports = loadFiles;
