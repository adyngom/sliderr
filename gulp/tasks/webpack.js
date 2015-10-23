var gulp = require('gulp');
var webpack = require('gulp-webpack');
var del = require('del');

gulp.task('webpack', function() {
    return gulp.src('src/main.js')
        .pipe(webpack(require('../../webpack.config.js')))
        .pipe(gulp.dest('dist/'));

});
