const express = require("express");
const router = express.Router();

const HomeController = require("../controllers/home");
const GeneroController = require("../controllers/genero");
const FilmeController = require("../controllers/filme");
const ClienteController = require("../controllers/cliente");
const OrderController = require("../controllers/order");
const AuthController = require("../controllers/auth");

const authRegisterValidator = require("../validators/auth/register");
const authLoginValidator = require("../validators/auth/login");

const filmeValidator = require("../validators/filme");

router.get("/", HomeController.index);

router.post("/auth/register", authRegisterValidator, AuthController.store);
router.post("/auth/signin", authLoginValidator, AuthController.login);

router.get("/generos", GeneroController.index);
router.post("/generos", GeneroController.store);
router.get("/generos/:id", GeneroController.show);
router.put("/generos/:id", GeneroController.update);
router.delete("/generos/:id", GeneroController.destroy);

router.get("/filmes", FilmeController.index);
router.post("/filmes", filmeValidator.create, FilmeController.store);
router.get("/filmes/:id", filmeValidator.show, FilmeController.show);
router.put("/filmes/:id", filmeValidator.update, FilmeController.update);
router.delete("/filmes/:id", filmeValidator.delete, FilmeController.destroy);

router.get("/clientes", ClienteController.index);
router.post("/clientes", ClienteController.store);
router.get("/clientes/:id", ClienteController.show);
router.put("/clientes/:id", ClienteController.update);
router.delete("/clientes/:id", ClienteController.destroy);

router.get("/orders", OrderController.index);
router.post("/orders", OrderController.store);
router.get("/orders/:id", OrderController.show);
router.put("/orders/:id", OrderController.update);
router.delete("/orders/:id", OrderController.destroy);

module.exports = router;
