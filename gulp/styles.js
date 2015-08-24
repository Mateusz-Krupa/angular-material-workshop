'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var browserSync = require('browser-sync');
var _ = require('lodash');
var wiredep = require('wiredep').stream;

//
//gulp.src(paths.styles, {cwd: bases.app})
//  .pipe(gulp.dest(bases.dist + 'styles'));
//


gulp.task('styles', function () {
  return gulp.src(
    path.join(conf.paths.src, '/app/index.css')
  ) .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app/')))
    .pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe(browserSync.reload({ stream: true }));
});
