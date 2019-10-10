let http = require('http');
const port = 3001;
const server = http.createServer((request, response) =>{
    // ma status: 200
    // Trailer: phan cuoi goi len ma md5
    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Trailer': 'Content-MD5'
    });

    // response.write("This is a response for a request !");
    // gan ben postman: http://DESKTOP-P3HRPAF:3001
    const ipAddress = request.socket.remoteAddress;
    //ip
    response.write(`Your IP address is ${ipAddress} \r\n`);
    //url: http://DESKTOP-P3HRPAF:3001/a_get_example?name=hieu%20tran&email=hieutran@gmail.com
    // ? tham so dau vao, &: and
    response.write(`Request's url: ${request.url} \r\n`);
    // boc tach url
    response.write(`Detail request's url: ${require('url').parse(request.url, true)}`);
    debugger;
    //Content-MD5: giong nhau xem khop voi request k
    response.addTrailers({'Content-MD5': '7895bf4b8828b55ceaf47747b4bca667'});
    // node inspect index
    // bam c >> send ben postman
    // repl >> dan "require('url').parse(request.url, true)": it thong tin
    // JSON.stringify(require('url').parse(request.url, true)): nhieu thong tin
    // JSON.stringify(require('url').parse(request.url, true).query): lay thong tin query
    // JSON.stringify(require('url').parse(request.url, true).query.name): lay thong tin query name

    response.end();
}).listen(port);
console.log(`Server is running on port: ${port}.`)