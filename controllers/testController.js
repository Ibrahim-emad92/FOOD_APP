
const testUserController=(req,res)=>{
    try {
        res.status(200).send({
            success:true,
            massage:"User true"
        })
    } catch (error) {
        console.log("Error in Api ",error);
    }
}

module.exports={
    testUserController
}