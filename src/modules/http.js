const http = require('http');

http.createServer(router).listen(3000);
//
function router(req, res) {
    console.log('new petition');
    console.log(req.url);
    switch (req.url) {
        case '/hi':
            res.write('Hi whats going on?');
            res.end();
            break;
    
        default:
            res.write('404? i dont know what u wont');
            res.end();
    }

}

console.log("hearing in : 3000 port");