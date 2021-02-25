const { Router } = require('express');

const authController = require('./controllers/auth');
const authCheckController = require('./controllers/authCheck');

const route = Router();

route.post('/auth', authController);

route.post('/checkAuth', authCheckController);

module.exports = route;
