var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/PassportAutomationSystem');
var db=mongoose.connection;
var loginModel=require('../models/loginModel');
var applnModel=require('../models/applicationModel2');
var aadharModel=require('../models/aadharModel');
var licenseModel=require('../models/licenseModel');
var i=0;
var dirty=0;
/*
applnModel.find({},function(req,res){
    for(i=0;i<res.length;i++){
        console.log("---------new user-------id-"+res[i].name);
        res[i].status="System Verified";
        res[i].save();
        
           //address
       var status="System Verified"
        var address=res[i].address;
        var dob=res[i].dob;
        var id=res[i].mid;
    console.log(dob);
    console.log(address);
           if(res[i].n_attach==='aadhar'){
               console.log("inside aadhar--- age");
               console.log("actual"+address);
               
               aadharModel.findOne({id:res[i].n_id},function(areq,ares){
                
                   if(!ares){dirty=1;
                    status="Rejected";
                    console.log("rej");
                    console.log(id);
                      applnModel.findOne({mid:id},function(e,r){
                          console.log(r);
                          r.status="Rejected";
                          r.a_id="Aadhar entry not found"
                          r.save();
                      });

                   }else{console.log("aadhar address"+ares.address);
                    
                       if(ares.address !== address){dirty=1;
                        applnModel.findOne({mid:id},function(e,r){
                            console.log(r);
                            r.status="waiting";
                            r.log="Resubmit Aadhar";
                            r.save();
                        });
                           console.log("resubmit aadhar--address");
                       }else{console.log("okay");}

                   }
                                        });
           }else if(res[i].n_attach==='license'){
            console.log("inside license--- address");
            console.log("actual"+address);
               
               licenseModel.findOne({id:res[i].n_id},function(areq,ares){
            if(!ares){dirty=1;status="Rejected";
                console.log("rejected due to license mismatch for address");
                console.log(id);
                      applnModel.findOne({mid:id},function(e,r){
                          console.log(r);
                          r.status="Rejected";
                          r.a_id="License entry not found"
                          r.save();
                      });

            }else{console.log("licenseaddress"+ares.address);
                if(ares.address !== address){dirty=1;
                    console.log("resubmit license--address");
                    applnModel.findOne({mid:id},function(e,r){
                        console.log(r);
                        r.status="waiting";
                        r.log="Resubmit Aadhar";
                        r.save();
                    });
                }else{console.log("okay");}

            }
                                 });



           }


           ///dob
           if(res[i].a_attach==='aadhar'){
            console.log("inside aadhar--- age");
            console.log("actual age"+dob);
            aadharModel.findOne({id:res[i].a_id},function(nreq,nres){
                if(!nres){dirty=1;status="Rejected";
                console.log(id);
                      applnModel.findOne({mid:id},function(e,r){
                          console.log(r);
                          r.status="Rejected";
                          r.n_id="Aadhar entry not found"
                          r.save();
                      });
                    console.log("rejected due to aadhar mismatch for dob");

                }else{console.log("aadhar age"+nres.age);
                    if(nres.dob !== dob){dirty=1;
                        console.log("resubmit aadhar--dob");
                        applnModel.findOne({mid:id},function(e,r){
                            console.log(r);
                            r.status="waiting";
                            r.log="Resubmit Aadhar";
                            r.save();
                        });
                    }else{console.log("okay");}

                }
                                     });
        }else if(res[i].a_attach==='license'){
            console.log("actual age"+dob);
            licenseModel.findOne({id:res[i].a_id},function(nreq,nres){
                
         if(!nres){
             dirty = 1;
             console.log(dirty);status="Rejected";
             console.log("rejected due to license mismatch for dob");
             
                      applnModel.findOne({mid:id},function(e,r){
                          console.log(r);
                          r.status="Rejected";
                          r.n_id="License entry not found"
                          r.save();
                      });

         }else{console.log("license age"+nres.age);
             if(nres.dob !== dob){dirty=1;
            
                 console.log("resubmit license-dob");
                 console.log(id);
                      applnModel.findOne({mid:id},function(e,r){
                          console.log(r);
                          r.status="waiting";
                          r.log="Resubmit License";
                          r.save();
                      });
             }else{console.log("okay");}

         }
                              });



        }

//console.log(status);
    }
});


*/

function req(){
aadharModel.findOne({id:1001},function(req,res){
    console.log(res);
    val=res.address;
    return val;
    console.log(val);
});}
var val=req();
console.log(val);