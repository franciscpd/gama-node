const { validate, Joi } = require("express-validation");

module.exports = validate({
  params: Joi.object({
    id: Joi.number().integer().required(),
  }),
  body: Joi.object({
    nome: Joi.string(),
    ano_lancamento: Joi.string(),
    estoque: Joi.number().integer().min(0),
    duracao: Joi.number().integer(),
    generos: Joi.array().items(Joi.number().integer()),
  }),
});
