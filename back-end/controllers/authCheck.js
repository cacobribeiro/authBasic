const express = require('express');

const authCheck = express.Router();

const validateToken = require('../auth/validateToken');

authCheck.post('/checkAuth', validateToken, async (req, res) => {
  res.status(200).json({ message: 'Token validado com sucesso!' });
});

module.exports = authCheck;
