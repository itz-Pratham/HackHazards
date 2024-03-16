const mongoose=require('mongoose');
const employeeschema1 =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    speciality:{
        type:String,
        required:true,
       
    },
    educationlevel :{
        type:String,
        required:true
    },
    address :{
        type:String,
        required:true
    },
    timings :{
        type:String,
        required:true
    },
    phonenumber :{
        type:BigInt,
        required:true,
        unique:true
    },
    password :{
        type:String,
        required:true
    },
    confirmpassword : {
        type:String,
        required:true
    },
})

const Register=new mongoose.model("SignupDetail1",employeeschema1);
module.exports=Register;