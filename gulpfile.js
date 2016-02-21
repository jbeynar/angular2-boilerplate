var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('connect', function ()
{
    connect.server({
        livereload: true,
        fallback: 'index.html',
        root: './'
    });
});

gulp.task('open', function()
{
    gulp.src('')
        .pipe(open({uri: 'http://localhost:8080'}));
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

gulp.task('css', function ()
{
    return gulp.src('app/**/*.css').pipe(gulp.dest('build'));
});


gulp.task('watch', function ()
{
    return gulp.watch('app/**/*', ['transpile', 'html', 'css']);
});

gulp.task('default', ['transpile', 'html', 'css', 'connect', 'open', 'watch']);
