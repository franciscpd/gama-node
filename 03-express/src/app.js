const express = require("express");

const port = 3000;

const app = express();

app.get("/:name?", (req, res) => {
  const { name } = req.params;

  res.send(`Hello ${name || "world"}`);
});

app.listen(port, () => {
  console.log(`Servidor executando na porta: ${port}`);
});
