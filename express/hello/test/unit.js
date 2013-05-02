var assert = require('assert');
var request = require('supertest');
var app = require('../app');

describe('the express app', function() {
		
	describe('the app', function () {
		it('should be a function', function() {
			assert.equal('function', typeof app);
		});
	}); 
	  
	describe('routing', function () {
		it('test / request', function(done){
			request(app)
			.get('/')
		  	.expect('Content-Type', /html/)
			.expect(200)
			.expect('this is the root page')
			.end(function(err, res){
				if (err) return done(err);
				done()
			});
		 });
		 
		it('test /hello.txt request', function(done){
			request(app)
			.get('/hello.txt')
		  	.expect('Content-Type', /plain/)
			.expect(200)
			.expect('this is the content of hello.txt')
			.end(function(err, res){
				if (err) return done(err);
				done()
			});
		 });
		 
		 it('test /404 request', function(done){
			request(app)
			.get('/404')
		  	.expect('Content-Type', /html/)
			.expect(404)
			.expect('Page not found')
			.end(function(err, res){
				if (err) return done(err);
				done()
			});
		 });
		  
	});
  
});
