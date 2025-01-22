const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController')

//Rota de Usuários
router.get('/users', userController.getAllUsers);

module.exports = router;