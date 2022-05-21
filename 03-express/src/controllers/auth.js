const Usuario = require("../models/Usuario");

const bcrypt = require("bcrypt");

const AuthController = {
  login: async (req, res) => {
    const { email, senha } = req.body;

    const usuario = await Usuario.findOne({
      where: {
        email,
      },
    });

    if (!usuario || !bcrypt.compareSync(senha, usuario.senha)) {
      return res.status(401).json("Usuário ou senha inválido");
    }

    return res.json(usuario);
  },
  store: async (req, res) => {
    const { nome, email, senha } = req.body;
    const hashSenha = bcrypt.hashSync(senha, 10);

    const novoUsuario = await Usuario.create({
      nome,
      email,
      senha: hashSenha,
    });

    res.status(201).json(novoUsuario);
  },
};

module.exports = AuthController;
