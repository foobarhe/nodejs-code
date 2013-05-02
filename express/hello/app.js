var express = require('express');

var app = express();
app.get('/', function(req, res) {
	res.status(200);
	res.set({
		"Content-Type": "text/html"
	});
    res.send("this is the root page");
});
app.get('/hello.txt', function(req, res) {
	res.status(200);
	res.set({
		"Content-Type": "text/plain"
	});
    res.send("this is the content of hello.txt");
});
app.get('/404', function(req, res) {
	res.status(404);
	res.set({
		"Content-Type": "text/html"
	});
    res.send("Page not found");
});

app.listen(8889);
console.log('Listening on port 8889');

module.exports = app;
