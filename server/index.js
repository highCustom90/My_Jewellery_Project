const express = require("express");
const cloudinary = require('cloudinary').v2;
const cors = require("cors");
const bcrypt = require("bcrypt"); // For password hashing
const User = require("./models/user");
const UserAccounts = require("./models/userAccounts");
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
app.get("/login/user", async (req, res) => {

    try {
        const { email, password } = req.body;


        if (!password) {
            return res.status(400).send({ message: "Password is required" });
        }


        const user = await UserAccounts.findOne({ email: email });

        // Compare the password using bcrypt
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(400).send({ message: "Invalid password" });
        }

        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        res.status(200).json({ message: "Login successful" });
    } catch (error) {

        console.error("Error during login:", error);
        res.status(500).send({ message: "Server error" });
    }
});

// this is user signin api
app.post("/signin/user", async (req, res) => {
    try {
        const { email, name, password } = req.body;

        // Hash the password before saving it
        const hashedPassword = await bcrypt.hash(password, 10);

        const users = new UserAccounts({ email, name, password: hashedPassword });
        await users.save();

        res.status(200).json({
            message: "Successfully inserted",
            data: { email, name }
        });
    } catch (error) {
        console.error(error);
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





app.listen(4500, () => {
    console.log("Server is running on port 4500");
});
