const http = require('http');
const fs = require('fs');

function sendIndex (response) {
	
	fs.readFile("index.html", function (err, data) {

		if (err) {
			console.error(err);
			return;
		}

		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(data);
		response.end();

	});
}

function sendPlayer (response, image) {
	
	fs.readFile("imgs/" + image, function (err, data) {

		if (err) {
			console.error(err);
			return;
		}

		response.writeHead(200, {"Content-Type": "image/png"});
		response.write(data);
		response.end();
	});
}

http.createServer(function (request, response) {
	
	let url = request.url.split("/");

	if (url[1].match("png")) {

		sendPlayer(response, url[1]);
		return;
	
	}

	sendIndex(response);

}).listen(6969);
