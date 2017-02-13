#!/usr/bin/env node

function clearscreen() {
  var cp = require('child_process');
  var cl = cp.spawn('clear');

  cl.stdout.on('data', function(data) {
  	console.log('Message: ' + data);
  });

  cl.on('close', function(code, signal) {
  	console.log('Clearscreen finished...');
  });
};

function listdirectory() {
  var cp = require('child_process');
  var ls = cp.spawn('ls', ['-lsa']);

  ls.stdout.on('data', function(data) {
  	console.log('Message: ' + data);
  });

  ls.on('close', function(code, signal) {
  	console.log('Listdirectory finished...');
  });

};

export default clearscreen;
// export { listdirectory };
