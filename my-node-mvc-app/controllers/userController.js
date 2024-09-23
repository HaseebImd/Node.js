// controllers/userController.js
const User = require('../models/userModel');

// Display all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().sort({ createdAt: -1 });;
        console.log(users);
        res.json(users);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Create a new user
exports.createUser = async (req, res) => {
    const newUser = new User(req.body);
    try {
        await newUser.save();
        res.json(newUser);
    } catch (err) {
        res.status(400).send(err);
    }
};
