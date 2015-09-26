'use strict';
var OwnedModules = require('npm-owned-modules');
var execSync = require('child_process').execSync;

module.exports = function (username) {

	if (typeof username !== 'string') {
		throw new TypeError('Expected a string');
	}

	OwnedModules(username,function (err, modules) {
		if(!modules.length) { // err is null, sadly
			var err = new Error("Unknown user " + username);
			Error.captureStackTrace(err,OwnedModules);
			throw err;
		}
		modules.forEach( function(module) {
			try {
				// creating a proper URL for now.
				var stdout = execSync("greenkeeper --slug " +
					[username,module].join('/') + " enable",
					{encoding: 'utf-8',stdio:[0,1,2]});
			} catch(err) {
				if (err.stdout) {
					console.error(err.stderr)
				}
				if (err.stderr) {
					console.error(err.stderr)
				}
			}
		});
	});
};
