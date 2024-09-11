const express = require('express');
const router = express.Router();
const Person = require('./../models/person');

router.post('/',async (req,res) => {
    try {
      const personData = req.body; // Get person data from the request body
      const person = new Person(personData); // Create a new Person instance
      const savedPerson = await person.save(); // Save the person to the database
      console.log('data saved');
      res.status(200).json(savedPerson); // Respond with the saved person
    } catch (err) {
        console.log(err);
      res.status(400).json({ error: err.message }); // Handle any errors
    }
    })  

    router.get('/', async(req, res)=> {
      try{
          const data =await Person.find();
          console.log('data fetched');
          res.status(200).json(data);
      }
      catch(err){
        console.log(err);
        res.status(400).json({ error: err.message }); 
      }
    
    });

    router.get('/:workType', async(req, res)=> {
        try{
            const workType =req.params.workType;
            if(workType == 'chef' || workType == 'manager' || workType == 'waiter' || workType == 'coderdancer'){
              const response = await Person.find({work : workType});
              console.log('response fetched');
              res.status(200).json(response);
            }
            else{
              res.status(404).json({ error: 'Invalid workType' }); 
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
    
            const updatedPerson = await Person.findByIdAndUpdate(id, updates, { 
                new: true,
                runValidators : true});
    
            if (!updatedPerson) {
                return res.status(404).json({ message: 'Person not found' });
            }
    
            res.status(200).json(updatedPerson);
        } catch (err) {
            res.status(500).json({ error: err.message });   
        }
    });
    

    router.delete('/:id', async (req, res) => {
        try {
            const { id } = req.params;  // Extract the id from the URL parameters
    
            const deletedPerson = await Person.findByIdAndDelete(id);
    
            if (!deletedPerson) {
                return res.status(404).json({ message: 'Person not found' });
            }
    
            res.status(200).json({ message: 'Person deleted successfully' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });


    
    module.exports = router;