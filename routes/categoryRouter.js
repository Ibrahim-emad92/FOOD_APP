const express=require('express');
const router = express.Router();
const {createCategoryController}=require('../controllers/categoryController');


router.post('/create',createCategoryController);

module.exports=router