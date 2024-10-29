const UserAccounts = require("../models/userAccounts");

// this is get cart functionality
async function getCartData(req, res) {
    const findUserWhenSignIn = await UserAccounts.findById(req.user.userId);
    if (!findUserWhenSignIn) {
        res.status(400).send("Please Create Account or Sign Up");
    }
    res.send(findUserWhenSignIn.cart);
}


// this is addto cart function
async function addToCartController(req, res) {
    const findUserWhenSignIn = await UserAccounts.findById(req.user.userId);
    if (!findUserWhenSignIn) {
        res.send("Please Create Account or Sign Up");
    }
    findUserWhenSignIn.cart.push(req.body);
    await findUserWhenSignIn.save();
    res.status(200).send("Item added to cart");
}

// this is delete cart item function
async function deleteCartItem(req, res) {
    const findUserWhenSignIn = await UserAccounts.findById(req.user.userId);
    if (!findUserWhenSignIn) {
        res.status(400).send("Please Create Account or Sign Up");
    }
    findUserWhenSignIn.cart = findUserWhenSignIn.cart.filter((item) => item.id.toString() !== req.params.id);
    await findUserWhenSignIn.save();
    res.send("Item deleted from cart");
}
module.exports = { addToCartController, deleteCartItem, getCartData };  