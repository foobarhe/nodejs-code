#!/usr/bin/env node

var foo = require('../lib/foo');
var args = process.argv;

if (args.length != 5 || (args[2] != 'add' && args[2] != 'minus')) {
	console.log('usage: ' + args[0] + ' ' + args[1] + ' add|minus value1 value2');
}
else {
	var opt = args[2];
	console.log(foo[opt](args[3], args[4]));
}
