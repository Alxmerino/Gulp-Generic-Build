/**
 * @desc A collection of helper functions used throughout
 *       the package
 */

'use strict';

const path = require('path');

/**
 * @desc Use path module to get the file extention of the
 *       given path.
 *
 * @param {String} filepath
 */
function getFileExt(filepath) {
    let fileObj = path.parse(filepath);

    return (typeof(fileObj.ext) !== '') ? fileObj.ext : null;
}

/**
 * @desc Use path module to check if the filepath contains
 *       an extention. If so, assume it is a file
 *
 * @param  {String}  filename
 * @return {Boolean}
 */
function isFile(filepath) {
    let fileObj = path.parse(filepath);

    return (typeof(fileObj) !== 'undefined' && fileObj.ext !== '');
}

/**
 * @desc Assumes the filename is a directory if
 *       it is not a file
 * @param  {String}  filename
 * @return {Boolean}
 */
function isDirectory(filepath) {
    return !isFile(filepath);
}

module.exports = {
    getFileExt,
    isFile,
    isDirectory
};
