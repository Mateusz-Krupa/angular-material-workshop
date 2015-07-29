'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');
var _ = require('lodash');
var wiredep = require('wiredep').stream;



gulp.task('styles', function () {
  return sass(
    path.join(conf.paths.src, '/app/index.scss'), { style: 'expanded' }
  ) .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app/')))
    .pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe(browserSync.reload({ stream: true }));
});
