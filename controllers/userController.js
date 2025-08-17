const userModel=require('../models/userModel');
const getUserController=async(req,res)=>{
    try {
        const user =await userModel.findById(req.user.id)
        if(!user){
            return res.status(404).send({
                success:false,
                massage:"User not founded"
            })
        }
        user.password=undefined;
        res.status(200).send({
            success:true,
            massage:"User get Successfully",
            user
        })
        
    } catch (error) {
        res.status(500).send({
            success:false,
            massage:"Error in Api",
            error
        })
       
    }
}

const updateUserController=async(req,res)=>{
    try {
        const user=await userModel.findById(req.user.id);
        if(!user){
            return res.status(404).send({
                success:false,
                massage:"User not founded"
            })
        }
        const {userName,address,phone,password}=req.body;
        if(userName)user.userName=userName;
        if(address)user.address=address;
        if(phone)user.phone=phone;
        if(password)user.password=password;

        await user.save();
        return res.status(201).send({
            success:true,
            massage:"Updated User",
            user
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            massage:"Error in Api",
            error
        })
    }
}

const deletUserController=async(req,res)=>{
    try {
        const user=await userModel.findByIdAndDelete(req.params.id);
        res.status(200).send({
            success:true,
            massage:"User was Deleted"
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            massage:"Error in Api",
            error
        })
    }
}

module.exports={
    getUserController,
    updateUserController,
    deletUserController
}