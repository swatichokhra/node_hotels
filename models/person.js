    const mongoose = require('mongoose');

// Define the Person schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: false,
  },
work : {
    type : String,
    enum : ['chef','waiter','manager', 'coderdancer'],
    required : true
},
address : {
    type : String
},
salary : {
    type: Number,
    required: true
    }});

    // Create the Person model
const Person = mongoose.model('Person', personSchema);

module.exports = Person;
