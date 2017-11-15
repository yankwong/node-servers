var http = require('http'); //build in from Node

var happyPort = 7000; //8080
var mehPort = 7500; //8080

// you can only "response" only one time
// response header can only be sent once, otherwise app will blow up
// this is the funciton to handle requests
function handleHappyRequest(request, response) {
  response.end('I\'m happy');
}

function handleMehRequest(request, response) {
  response.end('you weak!');
}

// now we create our server
var server1 = http.createServer(handleHappyRequest);
var server2 = http.createServer(handleMehRequest);

server1.listen(happyPort, function(){
  console.log('I\'m happy!! port num: '+ happyPort);
});

server2.listen(mehPort, function(){
  console.log('You weak dude, port num: '+ mehPort);
});