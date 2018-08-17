var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/PassportAutomationSystem');
var db=mongoose.connection;
var loginModel=require('../models/loginModel');
var applnModel=require('../models/applicationModel2');
var aadharModel=require('../models/aadharModel');
var licenseModel=require('../models/licenseModel');
var i=0;
applnModel.find({name:"ranga"},function(req,res){
    console.log(res);
    for(i=0;i<res.length;i++){console.log("------------user------"+res[i].name);
        if(res[i].n_attach==='aadhar'){
            var add=res[i].address;
            var user1=res[i].name;
            aadharModel.findOne({id:res[i].n_id},function(req1,res1){
                if(!res1){
                   
                    console.log("address proof aadhar fail:Rejected---"+user1);
                }
                else{
                    if(res1.address!==add){
                        
                        console.log("address proof aadhar mismatch:Rejected----"+user1);
                    }else{
                       
                        console.log("address accepted:aadhar---"+user1);} 
                } 
                              
            });
        }
        else if(res[i].n_attach==='license'){
            var add=res[i].address;
            var user2=res[i].name;
            licenseModel.findOne({id:res[i].n_id},function(req1,res1){
                if(!res1){
                    
                    console.log("address proof license fail:Rejected---"+user2);
                }
                else{
                    if(res1.address!==add){
                        
                        console.log("address proof license mismatch:Rejected---"+user2);
                    }else{
                        
                        console.log("address accepted:license----"+user2);}
                }
            });
        }


        if(res[i].a_attach==='aadhar'){
            var dob=res[i].dob;
            var user3=res[i].name;
            aadharModel.findOne({id:res[i].a_id},function(req2,res2){
                if(!res2){
                    
                    console.log("age proof aadhar fail:Rejected---"+user3);
                }else{
                    if(res2.dob!==dob){
                       
                        console.log("age address aadhar mismatch:Rejected---"+user3);
                    }else{
                    console.log("age accepted:aadhar----"+user3);}

                }
            });
        }
         else if(res[i].a_attach==='license'){
             var dob=res[i].dob;
             var user4=res[i].name;
             licenseModel.findOne({id:res[i].a_id},function(req2,res2){
                 if(!res2){
                    
                     console.log("age proof license fail:Rejected---"+user4);
                 }else{
                     if(res2.dob!==dob){
                        
                         console.log("age proof license mismatch:Rejected---"+user4);
                     }else{ 
                         console.log("age accepted:license---"+user4);}
                 }
             });

        
            
        }

    }
} );