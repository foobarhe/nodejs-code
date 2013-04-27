/*
$ node server.js
$ curl "http://foo.com:8889/index?a=A&b=B"
{"a":"A","b":"B"}
*/

var http = require('http');
var url = require('url');
var port = 8889;

var server = http.createServer(function (req, res) {
    var originUrl = req.url;
    console.log(originUrl);
    
    var parsedResult = url.parse(originUrl, true);
    var str = JSON.stringify(parsedResult);
    
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(str);
    res.end();
});
server.listen(port);
console.log('server running at ' + port);   
