const mongoose = require('mongoose');
const feedSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
});
const Feed = mongoose.model('Feed',feedSchema);
module.exports = Feed;