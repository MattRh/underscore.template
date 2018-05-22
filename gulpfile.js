const gulp = require('gulp');
const uglify = require('gulp-uglify');
const browserify = require('gulp-browserify');
const rename = require('gulp-rename');
const banner = require('gulp-banner');
const pkg = require('./package.json');

const comment = '/*\n' +
    ' * <%= pkg.name %> <%= pkg.version %>\n' +
    ' * <%= pkg.description %>\n' +
    ' * <%= pkg.homepage %>\n' +
    ' *\n' +
    ' * Copyright 2015-<%= present %>, <%= pkg.author %>\n' +
    ' * Released under the <%= pkg.license %> license.\n' +
    '*/\n\n';

gulp.task('build', function() {
    gulp.src('lib/index.js')
        .pipe(browserify({
            ignore: ['fs', 'buffer']
        }))
        .pipe(uglify())
        .pipe(banner(comment, {
            pkg: pkg,
            present: (new Date()).getFullYear(),
        }))
        .pipe(rename('underscore.template.js'))
        .pipe(gulp.dest('dist'));
});
