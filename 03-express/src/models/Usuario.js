const { DataTypes } = require("sequelize");

const db = require("../database");

const Usuario = db.define(
  "usuario",
  {
    codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "usuario", timestamps: false, underscored: true }
);

module.exports = Usuario;
