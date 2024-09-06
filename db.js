const mongoose = require('mongoose');

// Replace with your MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/hotels';

// Establish the connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// mongoose maintains default connection object representing mongodb connection
const db = mongoose.connection;

// Event listener for successful connection
db.on('connected', () => {
  console.log('Mongoose connected to MongoDB');
});

// Event listener for connection errors
db.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

db.on('disconnected', () => {
    console.log('Mongodb disconnected');
  });

  module.exports =db;

