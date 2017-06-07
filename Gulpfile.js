'use strict';

var childProcess = require('child_process');
var electron = require('electron');
var gulp = require('gulp');
var jetpack = require('fs-jetpack');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var os = require('os');
var packager = require('electron-packager')
var exec = childProcess.exec;
var path = require('path');
var build = jetpack.read('build.json', 'json');
var srcDir = jetpack.cwd('.');
var destDir = jetpack.cwd('./' + build.name + '-' + build.platform + '-' + build.arch);

gulp.task('build', function() {
	packager({
		dir: ".",
		name: build.name,
		platform: build.platform,
		overwrite: true,
		arch: build.arch,
		icon: "resources/app.ico",
		win32metadata: {
			ProductName: "Sound Monitor",
			CompanyName: build.company
		},
		version: "1.4.3"
	}, function done_callback(err, appPaths) {
		// srcDir.copy('robot.jar', destDir.path('robot.jar'));
		destDir.file('log.txt');
		destDir.file('config.json');
		destDir.write('config.json', {cygwin: ''});
	});
});

gulp.task('run', function() {
	childProcess.spawn(electron, ['.'], {
		stdio: 'inherit'
	});
});

gulp.task('test', function(){
	childProcess.exec('meter.cmd', {
		shell: 'cmd.exe'
	});
});
