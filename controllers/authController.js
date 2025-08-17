
const userModel=require('../models/userModel');
const bcrypt=require('bcrypt');
const JWT=require('jsonwebtoken');
const registerController=async(req,res)=>{
    try {
        const {userName,email,password,phone,address}=req.body;
        
        if(!userName||!email||!password||!phone||!address){
            return res.status(500).send({
                success:false,
                massage:"Please fill all field"
            })
        }
        const exisitUser=await userModel.findOne({email:email});
        if(exisitUser){
            return res.status(500).send({
                success:false,
                massage:"Email already exisit"
            })
        }
        const salt=bcrypt.genSaltSync(10);
        const hashedpassword=await bcrypt.hash(password,salt)
        const user=await userModel.create({
            userName,
            email,
            password:hashedpassword,
            phone,
            address});
        res.status(201).send({
            success:true,
            massage:"successfly register"
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            massage:"Error in Api"
        })
    }
}

const loginController=async(req,res)=>{
    try {
        const{email,password}=req.body;
        if(!email||!password){
            return res.status(500).send({
                success:false,
                massage:"Please enter email and password"
            })
        }
        const exisitUser=await userModel.findOne({email:email});
        if(!exisitUser){
            return res.status(404).send({
                success:false,
                massage:"This user not exisit"
            })
        }
        const isMatch=await bcrypt.compare(password,exisitUser.password);
        if(!isMatch){
            return res.status(500).send({
                success:false,
                massage:"password not matched"
            })
        }
        const token=JWT.sign({id:exisitUser._id},process.env.JWT_SECRET,{expiresIn:"5d"})
        exisitUser.password=undefined;
        res.status(201).send({
            success:true,
            massage:"successfly login",
            token,
            exisitUser
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            massage:"Error in Api"
        })
    }
}

module.exports={
    registerController,
    loginController
}

