const mongoose=require('mongoose');


const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:[true,'User Name is required']
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'password is required']
    },
    address:{
        type:Array
    },
    phone:{
        type:String,
        required:[true,'phone is required']
    },
    usertype:{
        type:String,
        required:[true,'user is required'],
        default:'clinet',
        enum:['clinet','admin','vendor','driver']
    },
    profile:{
        type:String,
        default:'https://www.istockphoto.com/photos/user-profile'
    }
},{timestamps:true})

module.exports=mongoose.model('User',userSchema);
