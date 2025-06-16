const mongoose = require('mongoose');
const cartSchema= new mongoose.Schema({
    iname:{
        type:String,
        required:true,
    },
    iprice:{
        type:Number,
        required:true,
    }
})
const cartModel=mongoose.model('cart',cartSchema)
module.exports=cartModel;