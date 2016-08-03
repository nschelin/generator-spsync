var gulp = require('gulp')
var sp = require('gulp-spsync')
gulp.task('default', function() {
return gulp.src('src/**/*.*').
    pipe(sp({
        "client_id":"<%= clientId %>",
        "client_secret":"<%= clientSecret %>",
        "realm" : "",
        "site" : "<%= siteUrl %>",
        "verbose": "true"
    })).        
    pipe(gulp.dest('build'))
})