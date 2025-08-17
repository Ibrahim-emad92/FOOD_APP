const mongoose=require('mongoose');
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('connect to db'.bgRed);
    }
    catch(err){
        console.log('error to connect',err);
    }
}

module.exports={
    connectDB
}