//JWT
const jwt=require('jsonwebtoken');


//Routing
const express=require('express');
const app=express.Router();

//Form data parsing
var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//DB--MongoDBConnnection
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/PassportAutomationSystem');
var db=mongoose.connection;
var loginModel=require('../models/loginModel');
var applnModel=require('../models/applicationModel2');




//APIROUTES

//APIlogin
app.post('/login',function(req,res1){
    console.log(req.body);
    console.log(req.body.email);
    console.log(req.body.password);
    var x={'email':req.body.email,'password':req.body.password};
    
   
    loginModel.findOne(req.body,function(req2,res){
    
        
        if(!res){
            res1.json({
                msg: 'invalid username and password combo',
                token2:''
            });
        }
        else{
        var ticket=res._id;
        console.log(res);
        var token=jwt.sign(ticket.toJSON(),'secretkey');
        console.log(token);
        res1.json({
            msg:res.name,
            token2:token,
        });
        //res1.redirect('/login');//here to redirect to portal
        }
    });
    
    
});

app.get('/form',function(req,res){
    res.sendFile('form.html', {root: __dirname })


});

app.post('/form',function(req,res){
    console.log(req.body);
    res.send(req.body);


});




//APIsignup
app.post('/signup',function(req,res){
console.log(req.body);
console.log('request object');
    loginModel.findOne(req.body,function(req1,res1){
       if(res1){
           console.log(res1);
       res.json({comment:'already signed  in!'});    
      
        }
       else{
        var mod=new loginModel({
            name:req.body.name,
            email:req.body.email,
            password: req.body.password
        });
            console.log(mod);
        mod.save(function(req,res){
            console.log(res.id);
            var mod2=new applnModel();
            mod2.mid=res.id;
            mod2.name=mod.name;
            mod2.save();

        

            
        });
    
        res.json({
            msg:"Success",
            token2:''
        });//redirect to login page
      
       }
    });

    
  
});


//APIgetStatus
app.get('/status',verifyToken,function(req,res1){
    var token; 
    jwt.verify(req.token,'secretkey',function(err,res){
        if(err){console.log('invalid token');
        res1.sendStatus(403);
        }
        else{
        console.log(res);
        applnModel.findOne({mid:res},'status',function(req,resd){
            res1.json(resd);
        });
       
        }
    });
    
    
});

//APIpostStatus
app.post('/status',function(req,res){
    console.log("status api");
    res.json({email: "post email@ststus yo!!.com",
password:"12345678",
url:"status dude!"},
);
});


//APIsubmitApplication
app.post('/appln',verifyToken,function(req1,res1){
    console.log("inside post appln");
    console.log(req1.body);

    jwt.verify(req1.token,'secretkey',function(err,res){
              if(err){console.log('invalid token');
               res1.sendStatus(403);
        }
        else{
            console.log(res);
            applnModel.findOne({mid:res},req1.body,function(req,resd){
                 
                console.log(resd);
                resd.name=req1.body.name;
                resd.gender=req1.body.gender;
                resd.dob=req1.body.dob;
                resd.pob=req1.body.pob;
                resd.fname=req1.body.fname;
                resd.mname=req1.body.mname;
                resd.address=req1.body.address;
                resd.n_id=req1.body.n_id;
                resd.a_id=req1.body.a_id;
                resd.a_attach=req1.body.a_attach;
                resd.n_attach=req1.body.n_attach;
                resd.status="Submitted";

                console.log("after updating");
                console.log(resd);
                resd.save();

        });
       res1.json({comment:'success'});
        }
    });
    
    
});
//APIgetApplication
app.get('/appln',verifyToken,function(req,res1){
    console.log(req.token);

    jwt.verify(req.token,'secretkey',function(err,res){
              if(err){console.log('invalid token');
               res1.sendStatus(403);
        }
        else{
            console.log("inside appln api   "+res);
            //res="5a90d5b034b075389c7a439d";
            applnModel.findOne({mid:res},function(req,resd){
                console.log(resd);
            res1.json(resd);
        });
       
        }
    });
});
    app.get('/appln2',verifyToken,function(req,res1){
        
        console.log(req.token);
    
        jwt.verify(req.token,'secretkey',function(err,res){
                  if(err){console.log('invalid token');
                   res1.sendStatus(403);
            }
            else{
                console.log("inside"+res);
                //res="5a90d5b034b075389c7a439d";
                applnModel.findOne({mid:res},function(req,resd){
                    console.log(resd);
                res1.json(resd);
            });
           
            }
        });
    });
   
    
    




//all Application List
app.get('/allappln',function(req,res){
    console.log("all applm");
applnModel.find({},function(req,resd){
    res.json(resd);
});
});
 app.get('/dummy',function(req,res){
   a={};

   var promise1 = new Promise((resolve,reject)=>{
    applnModel.find({},'status',function(err,req,resd){
        // res.json(resd);
        if(err){
            reject(err);
        }else{ console.log(resd);
            resolve(resd);
        }
    
    })

   });
   var promise2 = new Promise((resolve,reject)=>{
    applnModel.find({},'_id',function(err,req,resd){
        // res.json(resd);
        if(err){
            reject(err);
        }else{console.log(resd);
            resolve(JSON.parse(resd));
        }
    
    });

   });
   Promise.all([promise1,promise2],()=>{
       console.log('hai')});

   
  
 });





//helperFn
function verifyToken(req,res,next){

    console.log(req.headers['authorization'])
    const bearerHeader=req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[0];
        req.token= bearerToken;
        next();
    }
    else{
        res.sendStatus(403);
    }
}


module.exports=app;
