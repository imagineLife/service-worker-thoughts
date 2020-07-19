"use strict";

var curNum = 0;

self.postMessage('Hello from web-worker here!');

self.onmessage = onMessage;

function onMessage(e){
	console.log(`Received in web-worker: ${JSON.stringify(e.data)}`);
}