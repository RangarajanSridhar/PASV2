const express=require('express');
const app=express.Router();



app.get('/login',function(req,res){
    res.json({login:'successful'});
});
app.post('/signup',function(req,res){
    console.log("login api");
    res.json({email: "email@yahoo.com",
password:"12345678"});
});
app.get('/status',function(req,res){
    console.log("login api");
    res.json({email: "email@yahoo.com",
password:"12345678",
url:"status dude!"},
);
});

module.exports=app;