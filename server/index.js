const express = require('express');
const { default: helmet } = require('helmet');
const mongoose = require('mongoose');
const app = express();
const {MongoClient}=require('mongodb');
const morgan = require('morgan');

const adminRoutes = require("./Routes/admin")

const uri="mongodb+srv://raghav-tiruvallur:qwertyDUDE@cluster0.1npdfrx.mongodb.net/test";

//middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log("mongodb connected")
})

//routes
app.use("/api/admin",adminRoutes);

app.listen(8800,() => {
    console.log("backend running");
})
// connectToDB(client);
//1.submit volunteer form
//2. get all activities
//3. mapping
