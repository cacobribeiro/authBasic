const express = require('express');

const auth = require('basic-auth');

const data = require('../config/auth-config.json');
const createToken = require('../auth/createToken');

const authRoute = express.Router();

authRoute.post('/auth', async (req, res) => {
  const user = await auth(req);
  if (
    user &&
    user.name.toLowerCase() === data.username &&
    user.pass.toLowerCase() === data.password
  ) {
    const token = createToken({user})
    res.status(200).json({ message: 'Token criado com sucesso!', token });
  }
  res.status(401).json({ message: 'Usuário ou senha inválidos' });
});

module.exports = authRoute;
