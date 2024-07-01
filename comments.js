// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(request, response) {
  var path = url.parse(request.url).pathname;
  switch (path) {
    case '/':
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.write('Hello World');
      response.end();
      break;
    case '/comments':
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.write('Comments');
      response.end();
      break;
    default:
      response.writeHead(404);
      response.write('404 Not Found');
      response.end();
      break;
  }
});

server.listen(8001);
console.log('Server running at http://localhost:8001/');