const {faker} = require('@faker-js/faker')
const mongoose = require("mongoose");
const product = require("./model");
const customer = require("./modelcustomer")

async function seedData(){
    const uri = 'mongodb+srv://habil:inipassword123@atlascluster.imf1lq6.mongodb.net/?retryWrites=true&w=majority';
    const seed_count = 100;
    mongoose.set("strictQuery", false);
    await mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then (()=> {
        console.log("connected to mongodb")
    }).catch((err) => {
        console.log("error",err)
    })

    let timeseriesdata = []
    let customergenerate = []
    for (let i = 0; i<seed_count;i++){
        const nameProduct = faker.commerce.product();
        const price = faker.commerce.price();
        const nameCustomer = faker.person.fullName();
        const email = faker.internet.email()
        timeseriesdata.push({nameProduct, price})
        customergenerate.push({nameCustomer,email})
    }

    const seedDB = async() => {
        await product.insertMany(timeseriesdata)
        await customer.insertMany(customergenerate)
    }

    seedDB().then(() => {
        console.log("success seed data");
        mongoose.disconnect();
    })
} 

seedData()