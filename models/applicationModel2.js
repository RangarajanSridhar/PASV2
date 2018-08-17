const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const applnSchema=new Schema({
    mid:String,
    gender:String,
    dob:String,
    address:String,
    fname:String,
    mname:String,
    name:String,
    pob:String,
    n_attach:String,
    n_id:String,
    a_attach:String,
    a_id:String,
    status:{
        type : String,
        default : 'waiting'
     },
     log:{
        type : String,
        default : ' '
     },
    
    });

    const applnFormat2=mongoose.model('applicationDB',applnSchema,'applicationDB');
module.exports=applnFormat2;