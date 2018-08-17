const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const loginSchema=new Schema({
    dob: String,
    address : String,
    id : String
});


const loginFormat=mongoose.model('license',loginSchema,'license');
module.exports=loginFormat;