//dependencies
const p = require('path');
const http = require('http');
const nsa = require('node-static-alias');

//vars
const PORT = 8049
const WEB_DIR = p.join(__dirname,"ui");

//server setup
const ssObj = {
	serverInfo: "Web Workers",
	cache: 1
}
const server = http.createServer(handler);
const staticServer = new nsa.Server(WEB_DIR,ssObj);

async function handler(req,res){
	console.log('req.method');
	console.log(req.method);
	let allowedMethod = ["GET","HEAD"].includes(req.method);
	
	// Oops, invalid/unrecognized request
	if(!allowedMethod) {
		res.writeHead(404);
		res.end();
		return;
	}

	// handle static file requests
	// special handling for empty favicon
	if (req.url == "/favicon.ico") {
		res.writeHead(204,{
			"Content-Type": "image/x-icon",
			"Cache-Control": "public, max-age: 604800"
		});
		res.end();
		return;
	}

	// handle other static files
	staticServer.serve(req,res,function onStaticComplete(err){
		if (err) {
			res.writeHead(404);
			res.end();
		}
	});
};

// turn-on server
server.listen(PORT);
console.log(`Server started on http://localhost:${PORT}...`);