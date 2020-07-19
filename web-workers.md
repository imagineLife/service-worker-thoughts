## Web-Workers
**WHAT**
A JS file that runs on a separate thread than the webpage thread.
Acts as a separate 'program'

**WHY**
do some 'heavy lifting' that the main thread doesn't 'need' to do

**NOTES && THOUGHTS**
- it is on a different thread
- MULTIPLE WORKERS...
	- might not be on a unique thread
	- AT LEAST 1 extra thread
	- SOME BROWSERS
		- allow 'child' workers
	- Mobile devices may limit these
	- there are SPECIALIZED workers
		- **dedicated-workers**, belonging to a webpage tab
		- **shared-workers**, running 1x, allowed to communicate with all open pages, may not work in all browser settings
		- 

SERVICE WORKERS...
- lives beyond the web tab
- may still be limited to the page it started on
- the browser could shut it down
- browser manages service-worker life

