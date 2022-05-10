const http = require("http");

const port = 3000;
const host = "localhost";

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.end("Hello World");
});

server.listen(port, host, () => {
  console.log(`Servidor executando em http://${host}:${port}`);
});
