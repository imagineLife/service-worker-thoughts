//dependencies
const util = require("util");
const fs = require("fs");
const path = require("path");
const http = require("http");
const nodeStaticAlias = require("node-static-alias");
const getStream = require("get-stream");
const cookie = require("cookie");
const rand = require("random-number-csprng");

//primisified fns
const fsReadDir = util.promisify(fs.readdir);
const fsReadFile = util.promisify(fs.readFile);
const fsWriteFile = util.promisify(fs.writeFile);

//vars
const PORT = 8049;
const WEB_DIR = path.join(__dirname,"web");

//array of web-pages
const pages = [
	{
		// basic static page friendly URL rewrites
		match: /^\/(?:index)?(?:[#?]|$)/,
		serve: "index.html",
		force: true,
	},
	{
		// basic static page friendly URL rewrites
		match: /^\/(?:about|contact|login|404|offline)(?:[#?]|$)/,
		serve: "<% basename %>.html",
		force: true,
	},
	{
		// URL rewrites for individual posts
		match: /^\/post\/[\w\d-]+(?:[#?]|$)/,
		serve: "posts/<% basename %>.html",
		force: true,
	},
	{
		// match (with force) static files
		match: /^\/(?:(?:(?:js|css|images)\/.+))$/,
		serve: ".<% reqPath %>",
		force: true,
	},
]