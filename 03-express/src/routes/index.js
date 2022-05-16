const express = require("express");
const router = express.Router();

const HomeController = require("../controllers/home");
const GeneroController = require("../controllers/genero");
const FilmController = require("../controllers/film");
const CustomerController = require("../controllers/customer");
const OrderController = require("../controllers/order");

router.get("/", HomeController.index);

router.get("/generos", GeneroController.index);
router.post("/generos", GeneroController.store);
router.get("/generos/:id", GeneroController.show);
router.put("/generos/:id", GeneroController.update);
router.delete("/generos/:id", GeneroController.destroy);

router.get("/films", FilmController.index);
router.post("/films", FilmController.store);
router.get("/films/:id", FilmController.show);
router.put("/films/:id", FilmController.update);
router.delete("/films/:id", FilmController.destroy);

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
