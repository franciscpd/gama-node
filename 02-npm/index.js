const http = require("http");
const url = require("url");
const queryString = require("query-string");

const port = 3000;
const host = "localhost";

const server = http.createServer((request, response) => {
  // ?nome=francis&idade=33
  // {nome: "Francis", idade: 33}
  const params = queryString.parse(url.parse(request.url).search);

  response.statusCode = 200;
  response.setHeader("Content-Type", "text/json");

  response.end(JSON.stringify(params));
});

server.listen(port, host, () => {
  console.log(`Servidor executando em http://${host}:${port}`);
});
