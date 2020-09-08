//Connecting to database by creating mongoose
const mongoose = require("mongoose");

//Creating schemas with their data types
var nameSchema = new mongoose.Schema({
    name: String,
    currentdate: Date,
    phonenumber: Number,
    origin: String,
    nin: String,
    dob: Date,
    vehicle: String,
    refname: String,
    refnumber: Number,
    refoccupation: String,
    refdob: Date,
    downpayment: Number,
    stagename: String,
    loans: String,
    lccc: String,
    confirm: String
  });
  
  module.exports = mongoose.model("customer",nameSchema);