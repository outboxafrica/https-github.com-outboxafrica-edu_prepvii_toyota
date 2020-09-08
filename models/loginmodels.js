const mongoose = require("mongoose");
var nameSchema = new mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    description:{ 
        required:true,
        type:String
    }
})

module.exports = mongoose.model("Login", nameSchema);