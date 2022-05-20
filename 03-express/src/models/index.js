const Filme = require("./Filme");
const Genero = require("./Genero");
const Reserva = require("./Reserva");
const Cliente = require("./Cliente");
const Endereco = require("./Endereco");
const FilmeGenero = require("./FilmeGenero");
const ReservaFilme = require("./ReservaFilme");

Cliente.hasMany(Reserva);
Cliente.hasOne(Endereco);

Endereco.belongsTo(Cliente, {
  foreignKey: "cliente_codigo",
});

Filme.belongsToMany(Genero, {
  foreignKey: "filme_codigo",
  through: FilmeGenero,
});
Filme.hasMany(ReservaFilme);

Genero.belongsToMany(Filme, {
  foreignKey: "genero_codigo",
  through: FilmeGenero,
});

Reserva.hasMany(ReservaFilme);
Reserva.belongsTo(Cliente, {
  foreignKey: "cliente_codigo",
});

ReservaFilme.belongsTo(Reserva, {
  foreignKey: "reserva_codigo",
});
ReservaFilme.belongsTo(Filme, {
  foreignKey: "filme_codigo",
});

module.exports = {
  Filme,
  Genero,
  Cliente,
  Endereco,
};
