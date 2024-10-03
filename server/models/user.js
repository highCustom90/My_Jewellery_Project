const mongoose = require("mongoose")
const mongooseUrl = ("mongodb://localhost:27017/users");
mongoose.connect(mongooseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String,
    },
    cart: []
})

const User = mongoose.model("User", userSchema);

module.exports = User;