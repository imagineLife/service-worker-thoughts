## Service Workers
### Some links
[Serviceworke.rs](https://serviceworke.rs/)  
[Google Service-Workers primer](https://developers.google.com/web/fundamentals/primers/service-workers)
[Mozilla "Using Service Workers"](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
[FEM stearter/example files](https://github.com/FrontendMasters/service-workers-offline)

### Web Caching Misconception
"... stuff is being cached in the browser, my app doesn't need to 're-load' that data!"
POTENTIALLY WRONG
the browser makes very 'complex' decisions when 'deciding' what will be cached
- we make assumptions...
	- people aren't going to be interrupted
	- people having functioning web connection throughout their web experience
	- ...THESE are not always true

### Service Workers COULD...
- allow users to see all things OFFLINE that they did see when online
	- ...browsing an article? allow users to see the article offline
	- ...a 'fallback' during SLOW, or DOWN internet connection

## WebWorkers, Precursor to Service Workers
