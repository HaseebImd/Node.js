// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

// Routes
router.get('/', companyController.getAllCompanies); // GET all users
router.post('/', companyController.createCompany); // POST new user

module.exports = router;
