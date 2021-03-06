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
const generoValidator = require("../validators/genero");
const clienteValidator = require("../validators/cliente");

router.get("/", HomeController.index);

router.post("/auth/register", authRegisterValidator, AuthController.store);
router.post("/auth/signin", authLoginValidator, AuthController.login);

router.get("/generos", GeneroController.index);
router.post("/generos", generoValidator.create, GeneroController.store);
router.get("/generos/:id", generoValidator.show, GeneroController.show);
router.put("/generos/:id", generoValidator.update, GeneroController.update);
router.delete("/generos/:id", generoValidator.delete, GeneroController.destroy);

router.get("/filmes", FilmeController.index);
router.post("/filmes", filmeValidator.create, FilmeController.store);
router.get("/filmes/:id", filmeValidator.show, FilmeController.show);
router.put("/filmes/:id", filmeValidator.update, FilmeController.update);
router.delete("/filmes/:id", filmeValidator.delete, FilmeController.destroy);

router.get("/clientes", ClienteController.index);
router.post("/clientes", clienteValidator.create, ClienteController.store);
router.get("/clientes/:id", clienteValidator.show, ClienteController.show);
router.put("/clientes/:id", clienteValidator.update, ClienteController.update);
router.delete(
  "/clientes/:id",
  clienteValidator.delete,
  ClienteController.destroy
);

router.get("/orders", OrderController.index);
router.post("/orders", OrderController.store);
router.get("/orders/:id", OrderController.show);
router.put("/orders/:id", OrderController.update);
router.delete("/orders/:id", OrderController.destroy);

module.exports = router;
