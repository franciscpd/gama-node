const { DataTypes } = require("sequelize");

const db = require("../database");
const Cliente = require("./Cliente");

const Reserva = db.define(
  "reserva",
  {
    codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    data_reserva: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    data_limite_devolucao: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL(12, 2),
    },
    cliente_codigo: {
      type: DataTypes.INTEGER,
      References: {
        model: Cliente,
        key: "codigo",
      },
    },
  },
  { tableName: "reserva", timestamps: false, underscored: true }
);

module.exports = Reserva;
