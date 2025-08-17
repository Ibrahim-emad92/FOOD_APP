const express = require("express");

const authMiddleware = require('../middlewares/authMiddlewares');
const {
  createFoodController,
  getAllFoodsController,
  getSingleFoodController,
  getFoodByResturantController,
  updateFoodController,
  deleteFoodController,
} = require("../controllers/foodController");

const router = express.Router();

router.post("/create", authMiddleware, createFoodController);
router.get("/getAll", getAllFoodsController);
router.get("/get/:id", getSingleFoodController);
router.get("/getByResturant/:id", getFoodByResturantController);
router.put("/update/:id", authMiddleware, updateFoodController);
router.delete("/delete/:id", authMiddleware, deleteFoodController);

module.exports = router;