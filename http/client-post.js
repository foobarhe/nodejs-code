/*
$ node client-post.js 
 */

var http = require('http');   

var options = {
	host: 'sports.yahoo.com',
	port: '80',
	method: 'POST',
	path: '/nba/rss.xml'
};

var req = http.request(options, function(res) {
	console.log('status: ' + res.statusCode);
	console.log('headers: ' + JSON.stringify(res.headers));

	res.setEncoding('utf8');
	res.on('data', function (chunk) {
		console.log('body: ' + chunk);
	});
}).on('error', function(e) {
	console.log('problem with request: ' + e.message);
});

//write data to req body
req.write('foo=bar\n');
req.end();
