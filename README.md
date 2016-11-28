# Gulp Generic Task

These are Gulp tasks that can be used to build assests for various projects. They take a generic approach and can be managed through a config file.

# Goal
The main goal for this package is to have a collection of pre-defined tasks that can be used in many different projects. This will avoid writing the same tasks over and over or having to copy gulpfiles from project to project.

## List of tasks
- cleanup [nothing here yet]
- scss
- sassdoc [nothing here yet]
- javascript-dev
- javascript-prod

## Install
`npm install git+ssh@github.com:Alxmerino/Gulp-Generic-Build.git`

## Basic usage
You will need a `gulpfile.js` and a `config.json` file to use these tasks. You specify the path of the config file in `gulpfile.js`. See below and also examples/

config.json shoudl look like this.
```:json
{
    "tasks": ["scss"],
	"source": {
		"scss": "./path/to/scss",
		"js": "./path/to/js",
		"vendor": "./path/to/vendor",
		"img": "./path/to/img",
		"bower": "./bower_components",
		"node": "./node_modules"
	},
	"dest": {
		"css": "./path/to/dist/css",
		"js": "./path/to/dist/js",
		"img": "./path/to/dist/img"
	}
}

```

gulpfile.js should look like this
```:javascript
use strict';

let configFile  = __dirname + '/configs/config.json';
let gulp        = require('gulp');
let gulpTasks   = require('gulp-generic-build')(gulp, configFile);
```

## Todo
- Add in cleanup, javascript-* tasks
