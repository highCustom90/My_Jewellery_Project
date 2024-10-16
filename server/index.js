const express = require("express");
const cloudinary = require('cloudinary').v2;
const cors = require("cors");
const bcrypt = require("bcrypt"); // For password hashing
const jwt = require("jsonwebtoken")
const User = require("./models/user");
const UserAccounts = require("./models/userAccounts");
const { verifyToken } = require("./middlewares/tokenVerifier");
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
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

// this is user login api
app.post("/signin/user", async (req, res) => { // Changed to POST
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).send({ message: "Email and password are required" });
        }

        // Find user by email
        const user = await UserAccounts.findOne({ email: email });

        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        // Compare the password using bcrypt
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(400).send({ message: "Invalid password" });
        }

        // assign jwt token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

        // If everything is fine, send success response
        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send({ message: "Server error" });
    }
});


// this is user singup api
app.post("/createacc/user", async (req, res) => {
    try {
        const { email, password, name, lastName } = req.body;

        // Validate input
        if (!email || !password || !name || !lastName) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if the email already exists
        const existingUser = await UserAccounts.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "Email already in use" });
        }

        // Hash the password before saving it
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new UserAccounts({ email, name, lastName, password: hashedPassword });
        await user.save();
        // assign jwt token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
        res.status(201).json({ message: "Account successfully created", token }); // Use 201 for successful creation
    } catch (error) {
        res.status(500).json({ message: "Error creating user" });
    }
});


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


app.post("/addToCart", verifyToken, async (req, res) => {
    const findUserWhenSignIn = await UserAccounts.findById(req.user.userId);
    if (!findUserWhenSignIn) {
        res.send("Please Create Account or Sign Up");
    }
    findUserWhenSignIn.cart.push(req.body);
    await findUserWhenSignIn.save();
    res.status(200).send("Item added to cart");
})

// get add to cart data
app.get("/getCartData", verifyToken, async (req, res) => {
    const findUserWhenSignIn = await UserAccounts.findById(req.user.userId);
    if (!findUserWhenSignIn) {
        res.status(400).send("Please Create Account or Sign Up");
    }
    res.send(findUserWhenSignIn.cart);
})

// add to cart data delete api
app.delete("/deleteCartItem/:id", verifyToken, async (req, res) => {
    const findUserWhenSignIn = await UserAccounts.findById(req.user.userId);
    if (!findUserWhenSignIn) {
        res.status(400).send("Please Create Account or Sign Up");
    }
    findUserWhenSignIn.cart = findUserWhenSignIn.cart.filter((item) => item.id.toString() !== req.params.id);
    await findUserWhenSignIn.save();
    res.send("Item deleted from cart");
})
app.listen(4500, () => {
    console.log("Server is running on port 4500");
});

