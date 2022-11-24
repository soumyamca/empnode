var express=require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var {empModel}=require('./models/empModel')

var app=express()
app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())
app.get('/home',(req,res)=>{
    res.send("welcome to my website")
})
app.post('/read',(req,res)=>{
    var getEmpname=req.body.empname;
    var getEmpcode=req.body.empcode;
    var getDesig=req.body.desig;
    var getSalary=req.body.salary; 
    var getMob=req.body.mob;
    var empObject=new empModel(req.body);
    res.json(empObject)
})

app.listen(process.env.PORT||3011,()=>{
    console.log("server started at http://localhost:3011/home")
})