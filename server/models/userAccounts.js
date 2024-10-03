// here all users accounts

const mongoose = require("mongoose")
const mongooseUrl = ("mongodb://localhost:27017/users");
mongoose.connect(mongooseUrl);

const UserAccountSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

})
const UserAccounts = mongoose.model("UserAccounts", UserAccountSchema);
module.exports = UserAccounts;