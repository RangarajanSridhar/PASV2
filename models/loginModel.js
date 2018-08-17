const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const loginSchema=new Schema({
    name: String,
    email : String,
    password : String
});


const loginFormat=mongoose.model('loginDB',loginSchema,'loginDB');
module.exports=loginFormat;