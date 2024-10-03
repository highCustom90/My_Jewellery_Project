const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt"); // For password hashing
const User = require("./models/user");
const UserAccounts = require("./models/userAccounts");

const app = express();
app.use(cors());
app.use(express.json());

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

app.get("/login/user", async (req, res) => {

    try {
        const { email, password } = req.body;

        // Validate if password exists
        if (!password) {
            return res.status(400).send({ message: "Password is required" });
        }

        // Find user by email
        const user = await UserAccounts.findOne({ email: email }).select("-password");

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
        // Log any potential errors during the process
        console.error("Error during login:", error);
        res.status(500).send({ message: "Server error" });
    }
});


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

// app.get("/cart", async (req, res) => {
//     // Handle cart logic here
//     res.status(200).send({ message: "Cart endpoint is empty" });
// });

app.listen(4500, () => {
    console.log("Server is running on port 4500");
});
