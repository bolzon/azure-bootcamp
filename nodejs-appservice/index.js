
const http = require('http');

const server = http.createServer(function(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Olá mundo!');
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log('Servidor rodando em http://localhost:%d', port);