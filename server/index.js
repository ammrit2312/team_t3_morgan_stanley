const express = require('express');
const { default: helmet } = require('helmet');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
const {MongoClient}=require('mongodb');
const morgan = require('morgan');

const adminRoutes = require("./Routes/admin")
const volunteerRoutes=require("./Routes/Volunteer_details")

const uri="mongodb+srv://raghav-tiruvallur:qwertyDUDE@cluster0.1npdfrx.mongodb.net/test";

//middlewares
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log("mongodb connected")
})

//routes
app.use("/api/admin",adminRoutes);
app.use("/api/admin",volunteerRoutes);
app.listen(8800,() => {
    console.log("backend running");
})
// connectToDB(client);
//1.submit volunteer form
//2. get all activities
//3. mapping
