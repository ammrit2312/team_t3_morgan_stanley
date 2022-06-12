const express = require('express');
const { default: helmet } = require('helmet');
const mongoose = require('mongoose');
const cors = require('cors')
const cron = require('node-cron');
const getallactivies = require('./functions/check_activity_archive');


const app = express();
const {MongoClient}=require('mongodb');
const morgan = require('morgan');

const adminRoutes = require("./Routes/admin")
const volunteerRoutes=require("./Routes/Volunteer_details")
const userRoutes = require("./Routes/users");
const notificationRoutes = require("./Routes/notification");
const statsRoutes = require("./Routes/stats");

const chatRoutes=require("./Routes/chats");

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
app.use("/api/user",userRoutes);
app.use("/api/admin",notificationRoutes);
app.use("/api/stats",statsRoutes);
app.use("/api/chat",chatRoutes);


// currently this cronjob runs every minute (for testing) , will change the duration later
// getallactivies();

cron.schedule('* * * * *', () => {
    console.log('starting cron job');
    getallactivies();
});

cron.schedule('* * * * *', () => {
    console.log('starting cron job');
    getallactivies();
});




app.listen(8800,() => {
    console.log("backend running");
})
// connectToDB(client);
//1.submit volunteer form
//2. get all activities
//3. mapping
