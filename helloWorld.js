let http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-TYpe': 'text/plain'});
    res.end('Hello, World');

}).listen(3000);

console.log('Сервер запущен н 3000');