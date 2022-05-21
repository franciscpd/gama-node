const { validate, Joi } = require("express-validation");

module.exports = validate({
  body: Joi.object({
    nome: Joi.string().required(),
    ano_lancamento: Joi.string().required(),
    estoque: Joi.number().integer().min(0),
    duracao: Joi.number().integer().required(),
    generos: Joi.array().items(Joi.number().integer()),
  }),
});
