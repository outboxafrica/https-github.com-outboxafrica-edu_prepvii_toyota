const express = require("express");

const router = express.Router();

const User = require('../models/testmodels');

//Getting adminregistration page
router.get('/',(req,res)=>{
    res.send('All')

  })

  router.get('/',(req,res)=>{
    res.json(['Ali','Max', 'Alvin'])
  })
  
  module.exports = router;

  
   
      
      