const mongoose = require("mongoose");
const customerschema = new mongoose.Schema({
    nameCustomer:{
        type: String,
        required: true, 
    },
    email:{
        type: String,
        required: true,
    }
})

const customer = mongoose.model("customer",customerschema)
module.exports = customer;