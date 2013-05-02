var assert = require('assert');
var foo = require('../lib/foo');

describe('foo', function() {
		
	describe('test add', function () {
		it('1+2 should be 3', function() {
			assert.equal(3, foo.add(1, 2));
		});
		it('-1+2 should be 1', function() {
			assert.equal(1, foo.add(-1, 2));
		});
	}); 
	  
	describe('test minus', function () {
		it('1 - 2 should be -1', function() {
			assert.equal(-1, foo.minus(1, 2));
		});
	});
  
});
