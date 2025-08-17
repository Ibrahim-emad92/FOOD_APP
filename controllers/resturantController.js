
const resturantModel=require('../models/restaurantModel');

const createResturantController=async(req,res)=>{
    try {
        const {
            title,
            imageUrl,
            foods,
            time,
            delivery,
            pickup,
            isOpen,
            logoUrl,
            rating,
            ratingCount,
            code,
            coords}=req.body;

        const newResturant=new resturantModel({
            title,
            imageUrl,
            foods,
            time,
            delivery,
            pickup,
            isOpen,
            logoUrl,
            rating,
            ratingCount,
            code,
            coords
        })
        await newResturant.save();
        res.status(200).send({
            success:true,
            massage:"Resturnat Created successfully"
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            massage:"Error in Api",
            error
        })
    }
}

const getAllResturantController=async(req,res)=>{
    try {
        const restaurants=await resturantModel.find({});
        if(!restaurants){
            res.status(404).send({
                success:false,
                massage:"Restaurant not founded"
            })
        }
        res.status(200).send({
            success:true,
            totalCount:restaurants.length,
            restaurants
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            massage:"Error in Api",
            error
        })
    }
}

const getResturantByIdController=async(req,res)=>{
    try {
        const resturantId=req.params.id;
        if(!resturantId){
            res.status(404).send({
                success:false,
                massage:"Id Not founded"
            })
        }
        const restaurant=await resturantModel.findById(resturantId);
        if(!restaurant){
            res.status(404).send({
                success:false,
                massage:"No restaurant"
            })
        }
        res.status(200).send({
            success:true,
            restaurant
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            massage:"Error in Api",
            error
        })
    }
}
const deleteResturantController=async(req,res)=>{
    try {
        const resturantId=req.params.id;
        if(!resturantId){
            res.status(404).send({
                success:false,
                massage:"Id Not founded"
            })
        }
        const restaurant=await resturantModel.findByIdAndDelete(resturantId);
        if(!restaurant){
            res.status(404).send({
                success:false,
                massage:"No restaurant"
            })
        }
        res.status(200).send({
            success:true,
            restaurant
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
    createResturantController,
    getAllResturantController,
    getResturantByIdController,
    deleteResturantController
}