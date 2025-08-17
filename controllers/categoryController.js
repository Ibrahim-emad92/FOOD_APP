const categoryModel=require('../models/categoryModel');

const createCategoryController=async(req,res)=>{
    try {
        const {title,imageUrl}=req.body;
        if(!title||!imageUrl){
        res.status(404).send({
            success:false,
            massage:'Please enter title and imageUrl'
            })
        }  
        const newCategory=await categoryModel.create({title,imageUrl}); 
        await newCategory.save();
        res.status(200).send({
            success:true,
            massage:"Category Created successfully"
        })
    }
    catch (error) {
        res.status(500).send({
            success:false,
            massage:'Error in Api',
            error
        })
    }
}
    
module.exports={
    createCategoryController
}