const { Usuario } = require("../models");

module.exports = async (req, res, next) => {
  if (req.auth) {
    const usuario = await Usuario.findByPk(req.auth.codigo);
    if (!usuario) {
      next({
        status: 401,
        name: "UnauthorizedError",
        inner: {
          message: "Invalid user code",
        },
      });
    }
  }

  next();
};
