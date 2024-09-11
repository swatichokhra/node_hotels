// const notes = require('./notes.js');
// var _ = require('lodash');
// console.log('server.js');

// function add(a,b){
//     return a+b;

// }

// var result = add(2,10);
// console.log(result);
// console.log(notes.age);
// console.log(notes.add(2,3));

// var data = ["persn",1,2,1,2,"ers",3];
// var filter = _.uniq(data);
// console.log(filter);

// const jsonStrinng = '{"name":"john","age":30,"city":"new york"}';
// const jsonObject = JSON.parse(jsonStrinng);
// console.log(jsonObject);

// const objectToConvert = {
//     name : "Alice",
//     age :25
// };
// const jsonStringified = JSON.stringify(objectToConvert);
// console.log(jsonStringified);
const express = require('express');
const app = express();
const db = require('./db'); 
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());//req.body

const PORT =  process.env.PORT  || 3000;    


app.get('/', function (req, res) {
  res.send('Hello World,welcome to my hotel, how can i help you?');
})

// app.get('/idli', function (req, res) {
//     var customisedidli = {
//         size:"small" ,
//         number :12 ,
//         isSambhar : true
//     }
//     res.send(customisedidli);
//   });

//   app.get('/chinese', (req, res)=> {
//     res.send('Hello World,welcome to chinese restaurant')
//   });

//   app.post('/items',(req,res)=>{
//     res.send("data saved");
//   })


      //import the router files
      const personRoutes = require('./routes/personRoutes');
      const menuItemRoutes = require('./routes/menuItemRoutes');
      

      //use the routers
        app.use('/person', personRoutes);
        app.use('/menu', menuItemRoutes);

      

  app.listen(3000,()=>{
    console.log("listening on port 3000");
  })    