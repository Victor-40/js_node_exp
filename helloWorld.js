let http = require('http');

http.createServer(function(req, res){
    let path = req.url;
    switch(path) {
        case '/':
            res.writeHead(200, {'Content-TYpe': 'text/plain'});
            res.end('HOMEPAGE');
            break;
        case '/about':
            res.writeHead(200, {'Content-TYpe': 'text/plain'});
            res.end('about');
            break;
        default:
            res.writeHead(404, {'Content-TYpe': 'text/plain'});
            res.end('Not found');
            break;
    }
}).listen(3000);

console.log('Сервер запущен н 3000');