var express = require('express');
var app = express();

app.get('/hello.html', function(req, res) {
	var body = 'Hello World';
	res.setHeader('Content-Type', 'text/plain');
	res.setHeader('Content-Length', body.length);
	res.end(body);
});
app.listen(8889);
console.log('Listening on port 8889');

