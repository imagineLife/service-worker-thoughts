/*
	NOTES:
	- data to/from web-workers IS COPIED, not 'referenced'
	https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm

	CAN'T send a fn
	CAN take a string representing a fn, && eval the fn...etc
*/ 

(function index(){
	"use strict";

	var startStopBtn;
	var fibsList;

	//holds the worker
	var worker;

	//set READY fn on loaded
	document.addEventListener("DOMContentLoaded",ready,false);


	// LISTEN on button for click,
	// call 'startFibs'
	function ready() {
		startStopBtn = document.getElementById("start-stop-btn");
		fibsList = document.getElementById("fibs");

		startStopBtn.addEventListener("click",startFibs,false);
	}

	function renderFib(num,fib) {
		var p = document.createElement("div");
		p.innerText = `Fib(${num}): ${fib}`;
		if (fibsList.childNodes.length > 0) {
			fibsList.insertBefore(p,fibsList.childNodes[0]);
		}
		else {
			fibsList.appendChild(p);
		}
	}

	function startFibs() {
		startStopBtn.removeEventListener("click",startFibs,false);
		startStopBtn.addEventListener("click",stopFibs,false);

		startStopBtn.innerText = "Stop";
		fibsList.innerHTML = "";

		//set worker sourced from js file
		worker = new Worker("/js/worker.js");

		//LISTEN for 'message' event
		worker.addEventListener("message",onMessage);
	}

	function stopFibs() {
		startStopBtn.removeEventListener("click",stopFibs,false);
		startStopBtn.addEventListener("click",startFibs,false);

		startStopBtn.innerText = "Start";
		worker.terminate();
		worker = null;
	}

	function onMessage(e) {
		console.log(`CLIENT: onMessage`);
		worker.postMessage(`Hello from client!`)
	}

})();
