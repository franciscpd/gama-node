const express = require("express");
const router = express.Router();

const HomeController = require("../controllers/home");
const GeneroController = require("../controllers/genero");
const FilmeController = require("../controllers/filme");
const CustomerController = require("../controllers/customer");
const OrderController = require("../controllers/order");

router.get("/", HomeController.index);

router.get("/generos", GeneroController.index);
router.post("/generos", GeneroController.store);
router.get("/generos/:id", GeneroController.show);
router.put("/generos/:id", GeneroController.update);
router.delete("/generos/:id", GeneroController.destroy);

router.get("/filmes", FilmeController.index);
router.post("/filmes", FilmeController.store);
router.get("/filmes/:id", FilmeController.show);
router.put("/filmes/:id", FilmeController.update);
router.delete("/filmes/:id", FilmeController.destroy);

router.get("/customers", CustomerController.index);
router.post("/customers", CustomerController.store);
router.get("/customers/:id", CustomerController.show);
router.put("/customers/:id", CustomerController.update);
router.delete("/customers/:id", CustomerController.destroy);

router.get("/orders", OrderController.index);
router.post("/orders", OrderController.store);
router.get("/orders/:id", OrderController.show);
router.put("/orders/:id", OrderController.update);
router.delete("/orders/:id", OrderController.destroy);

module.exports = router;
