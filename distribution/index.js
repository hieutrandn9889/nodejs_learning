'use strict';

// install babel: npm install --save-dev babel-cli
// install plugin: npm install --save-dev babel-preset-es2015 babel-preset-stage-2
// install nodemon: npm install --save-dev nodemon  tha doi trong code và cập nhập ngay lập tức
var http = require('http');
var port = 3001;
var server = http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.write('Request\'s url: ' + request.url + ' \r\n');
    response.end();
}).listen(port);
console.log('Server is running on port: ' + port + '.');