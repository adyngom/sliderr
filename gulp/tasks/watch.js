var gulp = require('gulp');

gulp.task('watch', function() {
    gulp.watch('src/**/*.*', ['webpack', 'uglify']);
    gulp.watch('styles/**/*.*', ['webpack', 'uglify']);
});