const { response } = require("express");
const { validationResult } = require("express-validator");

const crearUsuario = (req, res = response) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);

  return res.json({
    ok: true,
    msg: "Crear usuario /new",
  });
};

const loginUsuario = (req, res = response) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  const { email, password } = req.body;
  console.log(email, password);

  return res.json({
    ok: true,
    msg: "login de usuario /",
  });
};

const revalidarToken = (req, res = response) => {
  return res.json({
    ok: true,
    msg: "Renew",
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
};
