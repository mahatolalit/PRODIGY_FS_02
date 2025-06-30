const mongoose = require('mongoose');

const DB_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('MongoDB connected successfully')
    }).catch((err) => {
        console.log('Error in MongoDB connection')
    })