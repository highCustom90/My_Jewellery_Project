const express = require("express");
const cloudinary = require('cloudinary').v2;
const cors = require("cors");
const User = require("./models/user");
const UserAccounts = require("./models/userAccounts");
const { verifyToken } = require("./middlewares/tokenVerifier");
const { SignIn, SignUP } = require("./controllers/authController");
const connectDB = require("./config/db");
const { addToCartController, deleteCartItem, getCartData } = require("./controllers/addToCartController");
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());
// connect with db
connectDB();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
    cname: "images.High_Custom_Jewellers.com"
});

// this is drop hint api
app.post("/login", async (req, res) => {
    try {
        const { email, name } = req.body;
        const newUser = new User({ email, name });
        await newUser.save();
        res.send({ email, name });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error saving user" });
    }
});
// don't touch here

// this is user login api
app.post("/signin/user", SignIn);


// this is user singup api
app.post("/createacc/user", SignUP);


// get all images from cloudinary
app.get('/api/images', (req, res) => {
    cloudinary.api.resources(
        {
            type: 'upload',
            max_results: 500,// You can adjust this as needed (max 500)
        },
        function (error, result) {
            if (error) {
                res.status(500).json({ error });
            } else {
                res.json(result.resources);
            }
        }
    );
});

// this is addtocart api
app.post("/addToCart", verifyToken, addToCartController)

// get add to cart data
app.get("/getCartData", verifyToken, getCartData)

// add to cart data delete api
app.delete("/deleteCartItem/:id", verifyToken, deleteCartItem);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server is running on port 4500");
});

   