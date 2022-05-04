const express = require("express");
const app = express();
const port = 3000;

// * http://localhost:3000/
app.get("/", (request, response) => {
  console.log(request);
  response.send("ProjetoDH");
});
// * http://localhost:3000/ola
app.get("/ola", (request, response) => {
  response.send("Ola Brasil!");
});
app.post("/frutas", (request, response) => {
  response.send("Get");
});
// * localhost
// * 127.0.0.1
app.listen(port, () => {
  console.log("Nosso servidor está rodando na porta " + port);
});

