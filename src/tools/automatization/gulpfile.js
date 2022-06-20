//const server = require('http').createServer();

const gulp = require('gulp');
const server = require('gulp-server-livereload');
/* const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`Listening on ${port}`)); */

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8124, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8124/');
gulp.task('build', function(cb){
    console.log('building the site');
    setTimeout(cb, 1200);
});

gulp.task('serve', function(cb){
    gulp.src('www').pipe(server({
        livereload: true,
        open: true,
    })); // serve the site
});

gulp.task('default', gulp.series('build', 'serve'));