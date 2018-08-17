const express = require('express');
var bodyParser=require('body-parser');
var path=require('path');
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/PassportAutomationSystem');




const apiRoutes=require('./routes/api');
const pageRoutes=require('./routes/view');


const app=express();
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers','Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization');
    
    
    next();

});
app.use('/api',apiRoutes);
app.use('/',pageRoutes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



app.listen(5000,function(){
    console.log("Listening at port 5000");
})
