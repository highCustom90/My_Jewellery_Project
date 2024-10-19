const express = require("express");
const router = express.Router();
const { addToCartController, deleteCartItem, getCartData } = require("../controllers/addToCartController");
const { verifyToken } = require("../middlewares/tokenVerifier");
// this is addtocart api
router.post("/addToCart", verifyToken, addToCartController);

// get add to cart data
router.get("/getCartData", verifyToken, getCartData);

// add to cart data delete api
router.delete("/deleteCartItem/:id", verifyToken, deleteCartItem);

module.exports = router;