var express=require('express')
var bodyParser = require('body-parser')
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
    res.json({"empname":getEmpname,"empcode": getEmpcode, "desig":getDesig,"salary": getSalary,"mobile": getMob})
})

app.listen(process.env.PORT||3007,()=>{
    console.log("server started at http://localhost:3007/home")
})