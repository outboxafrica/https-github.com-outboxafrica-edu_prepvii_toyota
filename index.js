const express = require("express");
//Installing mongoose to connect to database
const mongoose = require("mongoose");
//Declaring bodyparser to fetch and convert information
const bodyParser = require("body-parser");
//Creating a server
const server = express();

const path = require("path");

server.set("views", path.join(__dirname, "views"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));


//Creating a connection to database 
mongoose.connect(
    "mongodb://localhost:27017/Allan-db",
    { useNewUrlParser: true, useUnifiedTopology: true },
    function(err) {
      if (err) throw err;
      console.log("Successfully connected");
    }
  );

  const customerrroutes = require('./routes/testroutes');
server.use('/',customerrroutes);


const userroutes = require('./routes/testroutes');
server.use('/url',userroutes);

const loginroutes = require('./routes/loginroutes');
server.use('/login',loginroutes);


server.listen(3103,()=>{
    console.log("Listening on port 3103");
});
