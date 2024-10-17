// here all users accounts
// with their own accoutn and here db name is useraccounts
const mongoose = require("mongoose");
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