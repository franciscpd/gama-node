const { validate, Joi: JoiBase } = require("express-validation");
const { validator: validatorDocument } = require("cpf-cnpj-validator");

const Joi = JoiBase.extend(validatorDocument)
  .extend(require("joi-phone-number"))
  .extend(require("joi-postalcode"));

module.exports = validate({
  body: Joi.object({
    nome: Joi.string(),
    sobrenome: Joi.string(),
    cpf: Joi.document().min(11).max(11).cpf(),
    data_nascimento: Joi.date(),
    telefone: Joi.string().phoneNumber({
      defaultCountry: "BR",
      format: "national",
    }),
    email: Joi.string().email(),
    endereco: Joi.object({
      cep: Joi.string().min(8).postalCode("BR"),
      logradouro: Joi.string(),
      numero: Joi.string(),
      bairro: Joi.string(),
      cidade: Joi.string(),
      estado: Joi.string().max(2),
    }),
  }),
});
