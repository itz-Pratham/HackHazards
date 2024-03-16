const mongoose=require('mongoose');
const employeeschema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    // Last_name:{
    //     type:String,
    //     required:true,
    // },
    email:{
        type:String,
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

const User=new mongoose.model("UserDetail",employeeschema);
module.exports=User;