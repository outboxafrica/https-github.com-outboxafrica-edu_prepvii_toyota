const mongoose =require ('mongoose')
const usererschema = new mongoose.schema({
    name:{
        type:String,
        required:True
    }
})
modules.exports = mongoose.modules('userser',useerschema)
