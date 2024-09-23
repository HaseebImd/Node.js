// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Routes
router.get('/', userController.getAllUsers); // GET all users
router.post('/', userController.createUser); // POST new user

module.exports = router;
