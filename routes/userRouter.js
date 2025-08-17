const express=require('express');
const router=express.Router();
const {getUserController,updateUserController,deletUserController}=require('../controllers/userController');
const authMiddleware=require('../middlewares/authMiddlewares');
router.get('/getUser',authMiddleware,getUserController)
router.put('/updateUser',authMiddleware,updateUserController);
router.delete('/deleteUser/:id',authMiddleware,deletUserController);
module.exports=router;