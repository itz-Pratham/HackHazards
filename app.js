
const express=require("express");
const path=require("path")
const app=express();
const hbs=require("hbs")
const port= 4000;
require("./public/js/conn");
const Register=require("./public/js/modelclient")
const Register1=require("./public/js/modeldoc")



const static_path=path.join(__dirname,"templates/views")
const partial_path=path.join(__dirname,"templates/partials")
hbs.registerPartials(partial_path)

const static_path1=path.join(__dirname,"public")
app.use(express.static(static_path1))
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.set("view-engine","hbs");
app.set("views",static_path);
app.get("/home",(req,res)=>{
    res.render("home.hbs")
});
app.get("/",(req,res)=>{
    res.render("home.hbs")
});
app.get("/aboutus",(req,res)=>{
    res.render("aboutus.hbs")
});
app.get("/firstaid",(req,res)=>{
    res.render("first-aid.hbs")
});
app.get("/cardiologists",(req,res)=>{
    res.render("cardiologists.hbs")
});
app.get("/neurosurgeons",(req,res)=>{
    res.render("neurosurgeons.hbs")
});
app.get("/orthopedics",(req,res)=>{
    res.render("orthopedics.hbs")
});
app.get("/opthalmologists",(req,res)=>{
    res.render("opthalmologists.hbs")
});
app.get("/dermatologists",(req,res)=>{
    res.render("dermatologists.hbs")
});
app.get("/psychiatrists",(req,res)=>{
    res.render("psychiatrists.hbs")
});
app.get("/gynaecologists",(req,res)=>{
    res.render("gynaecologists.hbs")
});
app.get("/pediatricians",(req,res)=>{
    res.render("pediatricians.hbs")
});
app.get("/dentist",(req,res)=>{
    res.render("dentist.hbs")
});
app.get("/podiatrist",(req,res)=>{
    res.render("podiatrist.hbs")
});
app.get("/endocrin",(req,res)=>{
    res.render("endocrin.hbs")
});
app.get("/otolary",(req,res)=>{
    res.render("otolary.hbs")
});
app.get("/pulmologists",(req,res)=>{
    res.render("pulmologists.hbs")
});
app.get("/gastro",(req,res)=>{
    res.render("gastro.hbs")
});
app.get("/oncologist",(req,res)=>{
    res.render("oncologist.hbs")
});
app.get("/nephro",(req,res)=>{
    res.render("nephro.hbs")
});
app.get("/ai",(req,res)=>{
    res.render("ai.hbs")
});


app.get("/login",(req,res)=>{
    res.render("login.hbs")
});
app.get("/signup",(req,res)=>{
    res.render("signup.hbs")
});
app.get("/choose",(req,res)=>{
    res.render("choose.hbs")
});
app.get("/docsignup",(req,res)=>{
    res.render("docsignup.hbs")
});
app.post("/signup",async(req,res)=>{
    try{
        const password=req.body.password;
        const cpassword=req.body.confirmpassword;
        if(password===cpassword){
            const registerEmployee=new Register({
                
                name :req.body.name,
                email:req.body.email,
                password:password,
                confirmpassword:cpassword
            })
            const registered=await registerEmployee.save();
            res.status(201).render("home.hbs");
        }
        else{
            res.send("Password are not matching")
        }
    }catch(error){
        res.status(404).send(error);
    }
});
app.post("/docsignup",async(req,res)=>{
    try{
        const password=req.body.password;
        const cpassword=req.body.confirmpassword;
        if(password===cpassword){
            const registerEmployee1=new Register1({
                
                name :req.body.name,
                email :req.body.email,
                speciality :req.body.speciality,
                educationlevel :req.body.education,
                address :req.body.address,
                timings :req.body.timings,
                phonenumber :req.body.phone,
                
                password:password,
                confirmpassword:cpassword
            })
            const registered1=await registerEmployee1.save();
            res.status(201).render("home.hbs");
        }
        else{
            res.send("Password are not matching")
        }
    }catch(error){
        res.status(404).send(error);
    }
});
app.post("/login",async(req,res)=>{
    try {
        const email=req.body.email;
        const password=req.body.password;
        const User=await Register.findOne({email:email});
        if(User.password===password){
            res.status(201).render("home.hbs");
        }
    } catch (error) {
        res.status(404).send("Invalid login details");
    }
})
app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})