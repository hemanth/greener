#!/usr/bin/env node
'use strict';
var meow = ((m) => (m && m.default) ? m.default : m)(require(''meow''));
var greener = require('./');
var which = ((m) => (m && m.default) ? m.default : m)(require(''which''));

var cli = meow({
	help: [
		'Usage',
		'  $ greener [npm_user_name]',
		'',
		'Examples',
		'  $ greener hemanth'
	]
});

which('greenkeeper', function (err, resolvedPath) {
	if (err) {
		throw new Error('greenkeeper not found! \nPlease do a: npm install -g greenkeeper.')
	}
})

greener(cli.input[0]);
