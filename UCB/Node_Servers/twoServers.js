var http = require('http');

var PORT = 7000;
var PORT2 = 7500

//for PORT 7000
function handleRequest(request, response){
	response.end("You're awesome! " + request.url);
}
//for PORT 7500
function handleRequest2(request, response){
	response.end("You suck." + request.url)
}

//for PORT 7000
var server = http.createServer(handleRequest);

//for PORT 7500
var server2 = http.createServer(handleRequest2);

//for PORT 7000
server.listen(PORT, function(){
	console.log("Server listening on http://localhost:%s", PORT);
});

//for PORT 7500
server2.listen(PORT2, function(){
	console.log("Server listening on http://localhost:%s", PORT2);
});