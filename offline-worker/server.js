//dependencies
const util = require("util");
const fs = require("fs");
const path = require("path");
const http = require("http");
const nodeStaticAlias = require("node-static-alias");
const getStream = require("get-stream");
const cookie = require("cookie");
const rand = require("random-number-csprng");

const fsReadDir = util.promisify(fs.readdir);
const fsReadFile = util.promisify(fs.readFile);
const fsWriteFile = util.promisify(fs.writeFile);