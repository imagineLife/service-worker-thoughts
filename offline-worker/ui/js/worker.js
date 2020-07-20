"use strict";

let curNum = 0;

self.onmessage = onMessage;

//Once client sends a message, start the fib...
function onMessage(e){

	//START the fib-finding sequence
	getNextFib();
}

function getNextFib(){
	//... this will get exponentially slower as the number grows
	const curFib = makeFib(curNum);

	//send msg to webpage
	self.postMessage({idx: curNum, num: curFib})

	// increase fibonacci index to create
	curNum++;

	//re-start fib-creating process
	getNextFib()
}

//... an intentionally exponentially slow fibonacci creating fn
function makeFib(n){
	
	if(n < 2){
		return n;
	}
	
	return makeFib(n - 1) + makeFib(n - 2);
}