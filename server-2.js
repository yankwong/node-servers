var http = require('http'); //build in from Node

const HAPPYPORT = 7000; //8080
const MEHPORT = 7500; //8080

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

server1.listen(HAPPYPORT, function(){
  console.log('I\'m happy!! port num: '+ HAPPYPORT);
});

server2.listen(MEHPORT, function(){
  console.log('You weak dude, port num: '+ MEHPORT);
});