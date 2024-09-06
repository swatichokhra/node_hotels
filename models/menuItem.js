const mongoose = require('mongoose');
// Define the MenuItem schema
const menuItemSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      
    },
    price: {
      type: Number,
      required: true,
      
    },
    taste: {
      type: String,
      enum: ['Sweet', 'Spicy', 'Sour'],
      required: true
    },
    ingredients: {
      type: [String],
      default : []
    },
    is_drink: {
      type: Boolean,
      default : false
      
    },
    num_sales : {
        type : Number,
        default :  0

    }
  });
  
  // Create the MenuItem model
  const MenuItem = mongoose.model('MenuItem', menuItemSchema);
  
  module.exports = MenuItem;