const express=require('express');
const router = express.Router();
const {createCategoryController,getAllCategoryController,updateCategoryByIdController,deleteCategoryController}=require('../controllers/categoryController');
const authMiddleware=require('../middlewares/authMiddlewares')


router.post('/create',authMiddleware,createCategoryController);
router.get('/getAll',getAllCategoryController);
router.put('/update/:id',authMiddleware,updateCategoryByIdController);
router.delete('/delete/:id',authMiddleware,deleteCategoryController);

module.exports=router