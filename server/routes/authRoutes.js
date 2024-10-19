const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { SignIn, SignUP } = require("../controllers/authController");
// this is drop hint api
router.post("/login", async (req, res) => {
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
router.post("/signin/user", SignIn);


// this is user singup api
router.post("/createacc/user", SignUP);

module.exports = router;