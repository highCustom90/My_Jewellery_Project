const bcrypt = require("bcrypt"); // For password hashing
const jwt = require("jsonwebtoken");
const UserAccounts = require("../models/userAccounts");
async function SignIn(req, res) { // Changed to POST
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
}

async function SignUP(req, res) {
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
}
module.exports = { SignIn, SignUP };