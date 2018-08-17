const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const applnSchema=new Schema({
    mid: String,
    status:{
        type : String,
        default : 'waiting'
     },
    Applyingfor: String,
    TypeofApplication: String,
    ValidityRequired: String,
    name: String,
    surname: String,
    dob: Date,
    pob_village: String,
    pob_district: String,
    pob_state: String,
    Gender:String ,
    CitizenofIndiaby:String,
    bCert: String,
    VoterID: String,
    adno: String,
    vDistinguishingMark: String,
    fatherName: String,
    motherName: String,
    spouseName: String,
    prRes_dNo: String,
    prRes_Village: String,
    prRes_District: String,
    prRes_State: String,
    prRes_PIN: String,
    telNo: String,
    mobNo: String,
    email: String,
    peRes_dNo: String,
    peRes_Village: String,
    peRes_District: String,
    peRes_State: String,
    peRes_PIN: String,
    prPas_No: String,
    prPas_DOI: Date,
    prPas_DOE: Date,
    prPas_POE: String
   
});


const applnFormat=mongoose.model('applicationDB',applnSchema,'applicationDB');
module.exports=applnFormat;