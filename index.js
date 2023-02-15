const http = require('http');
const fs = require('fs');
const filesStatic = require('node-static');

let files = new filesStatic.Server("./public");

http.createServer(function (request, response) {
	
	request.addListener('end', () => {
		files.serve(request, response);
	}).resume();

}).listen(6969);
