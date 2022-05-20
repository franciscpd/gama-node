const { DataTypes } = require("sequelize");

const db = require("../database");
const Filme = require("./Filme");
const Reserva = require("./Reserva");

const ReservaFilme = db.define(
  "reserva_filme",
  {
    codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    data_devolucao: {
      type: DataTypes.DATE,
    },
    quantidade: {
      type: DataTypes.INTEGER,
    },
    reserva_codigo: {
      type: DataTypes.INTEGER,
      References: {
        model: Reserva,
        key: "codigo",
      },
    },
    filme_codigo: {
      type: DataTypes.INTEGER,
      References: {
        model: Filme,
        key: "codigo",
      },
    },
  },
  { tableName: "reserva_filme", timestamps: false, underscored: true }
);

module.exports = Reserva;
