const express = require("express");

const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/products", (req, res) => {
  res.json([]);
});

app.post("/products", (req, res) => {
  res.json(req.body);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: `Produto ${id}`,
    price: 300,
  });
});

app.put("/products/:id", (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    ...(req.body || {}),
  });
});

app.delete("/products/:id", (req, res) => {
  res.status(204).send("");
});

app.get("/:name?", (req, res) => {
  const { name } = req.params;

  res.send(`Hello ${name || "world"}`);
});

app.listen(port, () => {
  console.log(`Servidor executando na porta: ${port}`);
});
