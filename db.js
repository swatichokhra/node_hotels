const mongoose = require('mongoose');
require('dotenv').config();

// Replace with your MongoDB connection string
//const mongoURL = process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URL;

// Establish the connection
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

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

