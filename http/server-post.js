/*
$ node server.js
$ curl --data "a=A&b=B" "http://localhost:8889/index"
a=A&b=B
*/

var http = require('http');
var port = 8889;

var server = http.createServer(function (req, res) {
	var data = '';
	req.setEncoding('utf8');
	
	req.on('data', function(chunk) {
		data += chunk;
	}).on('end', function() {
		res.writeHead(200, {'Content-Type' : 'text/html'});
	    res.write(data);
	    res.end();
	});
});
server.listen(port);
console.log('server running at ' + port);
