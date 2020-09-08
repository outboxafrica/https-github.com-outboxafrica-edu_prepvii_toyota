const express = require("express");

const router = express.Router();

const User = require('../models/loginmodels');

  
  router.post('/',(req,res)=>{
    res.json(["Ali"])
  })
       
  module.exports = router; 
      