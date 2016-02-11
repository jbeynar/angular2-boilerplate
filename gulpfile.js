var gulp = require('gulp');
var connect = require('gulp-connect');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('connect', function ()
{
    connect.server({
        livereload: true,
        root: './'
    });
});

gulp.task('transpile', function ()
{
    var tsResult = gulp.src('app/**/*.ts')
            .pipe(ts(tsProject));
    return tsResult.js.pipe(gulp.dest('build')).pipe(connect.reload());
});

gulp.task('html', function ()
{
    return gulp.src('./app/**/*.html').pipe(gulp.dest('build'));
});

gulp.task('watch', function ()
{
    return gulp.watch('app/**/*', ['transpile', 'html']);
});

gulp.task('default', ['transpile', 'connect', 'watch']);
