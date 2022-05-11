const express = require("express");

const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/:name?", (req, res) => {
  const { name } = req.params;

  res.send(`Hello ${name || "world"}`);
});

app.listen(port, () => {
  console.log(`Servidor executando na porta: ${port}`);
});
