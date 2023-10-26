const mongoose = require("mongoose");
const productschema = new mongoose.Schema({
    nameProduct:{
        type: String,
        required: true, 
    },
    price:{
        type:Number,
        required:true,
    }
})

const product = mongoose.model("product",productschema)
module.exports = product;