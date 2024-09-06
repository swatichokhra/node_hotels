const express = require('express');
const router = express.Router();
const MenuItem  = require('../models/menuItem');


router.post('/',async (req,res) => {
    try {
      const menuData = req.body; // Get person data from the request body
      const menu = new MenuItem(menuData); // Create a new Person instance
      const savedMenu = await menu.save(); // Save the person to the database
      console.log('data saved');
      res.status(200).json(savedMenu); // Respond with the saved person
    } catch (err) {
        console.log(err);
      res.status(400).json({ error: err.message }); // Handle any errors
    }
    })  

    router.get('/', async(req, res)=> {
      try{
          const data =await MenuItem.find();
          console.log('data fetched');
          res.status(200).json(data);
      }
      catch(err){
        console.log(err);
        res.status(400).json({ error: err.message }); 
      }
    
    });

    router.get('/:tasteType', async(req, res)=> {
      try{
          const tasteType =req.params.tasteType;
          if(tasteType == 'Sweet' || tasteType == 'Spicy' || tasteType == 'Sour'){
            const response = await MenuItem.find({taste : tasteType});
            console.log('response fetched');
            res.status(200).json(response);
          }
          else{
            res.status(404).json({ error: 'Invalid tasteType' }); 
          }
      }
      catch(err){
        console.log(err);
        res.status(500).json({ error: 'Internal server error' }); 
      }
    
    });

    router.put('/:id', async (req, res) => {
      try {
          const { id } = req.params;  // Extract the id from the URL parameters
          const updates = req.body;   // Extract the fields to update from the request body
  
          const updatedMenu = await MenuItem.findByIdAndUpdate(id, updates, { 
              new: true,
              runValidators : true});
  
          if (!updatedMenu) {
              return res.status(404).json({ message: 'mennu item not found' });
          }
  
          res.status(200).json(updatedMenu);
      } catch (err) {   
          res.status(500).json({ error: err.message });   
      }
  });
  

  router.delete('/:id', async (req, res) => {
      try {
          const { id } = req.params;  // Extract the id from the URL parameters
  
          const deletedMenuItem = await MenuItem.findByIdAndDelete(id);
  
          if (!deletedMenuItem) {
              return res.status(404).json({ message: 'Menu Item not found' });
          }
  
          res.status(200).json({ message: 'Menu item deleted successfully' });
      } catch (err) {
          res.status(500).json({ error: err.message });
      }
  });
  
  module.exports = router;
  