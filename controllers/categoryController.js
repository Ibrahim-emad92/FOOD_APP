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
const getAllCategoryController=async(req,res)=>{
    try {
        const categories=await categoryModel.find({});
        if(!categories){
            res.status(404).send({
            success:false,
            massage:'Not find Categories'
            })
        }  
        res.status(200).send({
            success:true,
            categories
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            massage:'Error in Api',
            error
        })
    }
}

const updateCategoryByIdController=async(req,res)=>{
    try {
        const id=req.params.id;
        const {title,imageUrl}=req.body;
        const updateCategory=await categoryModel.findByIdAndUpdate(id,{title,imageUrl},{new:true});

        if(!updateCategory){
            res.status(404).send({
            success:false,
            massage:'Category Not founded'
            })
        }
        res.status(200).send({
            success:true,
            massage:'category updated',
            updateCategory
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            massage:'Error in Api',
            error
        })
    }
}
const deleteCategoryController=async(req,res)=>{
    try {
        const id=req.params.id;
        const category=await categoryModel.findById(id);
        if(!category){
            res.status(404).send({
            success:false,
            massage:'Category Not founded'
            })
        }
        await categoryModel.findByIdAndDelete(id);
        res.status(200).send({
            success:true,
            massage:'category deleted'
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            massage:'Error in Api',
            error
        })
    }
}

module.exports={
    createCategoryController,
    getAllCategoryController,
    updateCategoryByIdController,
    deleteCategoryController
}