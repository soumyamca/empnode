 var  mongoose  = require("mongoose");

var empSchema=new mongoose.Schema(
    {
        
        empname:{type:String,require:true},
        empcode:{type:String,require:true},
        desig:{type:String,require:true},
        salary:{type:Number,require:true},
        mobile:{type:Number,require:true},
    }
);
var empModel=mongoose.model('employees',empSchema);
var empSchema=new mongoose.Schema(
    
    
);
module.exports={empModel}