// here all users accounts
// with their own accoutn and here db name is useraccounts
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
    lastName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    cart: []

})
const UserAccounts = mongoose.model("UserAccounts", UserAccountSchema);
module.exports = UserAccounts;