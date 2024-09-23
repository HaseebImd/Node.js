// Import mongoose
const mongoose = require('mongoose');

// MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/myDatabase'; // Change to your MongoDB URL

// Connect to MongoDB
mongoose.connect(mongoURL)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


// Define a schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: Number,
    address: {
        city: String,
        zip: String
    }
});

// Define a model
const User = mongoose.model('User', userSchema);


// Create a new user
const createUser = async () => {
    const newUser = new User({
        name: 'John Doe',
        email: 'john@example.com',
        age: 29,
        address: {
            city: 'New York',
            zip: '10001'
        }
    });

    await newUser.save();
    console.log('User created:', newUser);
};

createUser();
