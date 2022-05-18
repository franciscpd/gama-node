const Filme = require("./Filme");
const Genero = require("./Genero");
const Cliente = require("./Cliente");
const Endereco = require("./Endereco");

Cliente.hasOne(Endereco);
Endereco.belongsTo(Cliente, {
  foreignKey: "cliente_codigo",
});

module.exports = {
  Filme,
  Genero,
  Cliente,
  Endereco,
};
