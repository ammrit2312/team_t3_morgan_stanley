const router = require('express').Router();
const Activity = require('../Model/Activity');
const Reccomendation = require('../Model/Reccomendation');
const Volunteers = require('../Model/Volunteers');


// const io=require('socket.io')(8800,{
//     cors:{
//         origin:['http://localhost:3000']
//     }
// })

//route for admin to submit an activity
router.post("/submit-activity",async (req,res) => {
    try{
        const newActivity = new Activity(req.body);    
        await newActivity.save();
        res.status(200).json({"message":"successfully created activity"});
    
    }
    catch(err){
        console.log(err);
        res.status(500).json({"message":err});
    }
})


// function for getting the list of all activities (to be used for mapping)
// returns the object of all activities.
async function getAllActivities(){
    try
    {
    const activities = await Activity.find({},{_id:1,ActivityName:1,ActivityDate:1,ActivityTime:1,ActivityType:1,ActivityDurationInMinutes:1,Activity_Location:1,Language_Preference:1,Preffered_skills:1,Activity_availability:1});
    console.log(activities)
    }
    catch(e)
    {
        console.log(e)
    }
    
}

// api to get list of all activities
router.get("/list-all-activities",async(req,res)=> {
    try{
        const activities = await Activity.find({},{_id:1,ActivityName:1,ActivityDate:1,ActivityTime:1,ActivityType:1,ActivityDurationInMinutes:1,Activity_Location:1,Language_Preference:1,Preffered_skills:1,Activity_availability:1});
        res.status(200).json(activities);
    }
    catch(err){
        console.log(err)
        res.status(500).json({"message":err})
    }
})

// get all the recommended activities
//dummy api
router.get("/list-all-recommended-activities",async(req,res)=>{
    const activities=await Reccomendation.find({User_Activity_Select:false})
    res.status(200).json(activities);
});

// route to assign volunteers to the activity
//updates AssignedTo list in Activity Schema by pushing userid
//updates User_Activity_Select indicating the user is selected
//updates Upcoming_Activities list for volunteer by pushing activity id
router.put("/updateList/:id/:uid",async(req,res)=>{
    try{
    id=req.params.id 
    userID=req.params.uid
    const data =await Activity.updateOne({_id:id},{$push:{AssignedTo:userID},$inc:{Current_assigned : 1}});
    const status=await Reccomendation.updateMany({UserId:userID},{User_Activity_Select:true});
    const update=await Volunteers.findOneAndUpdate({UserID:userID},{ $push : {"Upcoming_Activities": { newItem: id } }});
    await Volunteers.updateOne({_id:userID},{assigned:true});
    res.status(200).json({"message":"Assigned successfully"});
    }
    catch(e)
    {
        console.log(e);
        res.status(500).json({"message":"encountered a server error"});
    }
})

// route to update the Attendance after the activity for volunteer by admin
//updates Volunteer_Number_Of_Activities_Attended in volunteer schema
//updates Activity_Attendance in Activity schema by pushing userid
router.put("/update-attendance/:aid/:uid",async(req,res)=>{
    try{
    aid=req.params.aid 
    uid=req.params.uid
    const data = await Volunteers.updateOne({UserID:uid},{$inc:{Volunteer_Number_Of_Activities_Attended : 1}});
    const status= await Activity.findOneAndUpdate({ActivityID:aid},{ $push : {"Activity_Attendance": { newItem: uid } }});
    await Reccomendation.updateOne({UserId:uid},{User_Activity_Select:true})
    res.status(200).json({"message":"Attendance updated successfully"});
    }
    catch(e)
    {
        console.log(e);
        res.status(500).json({"message":"encountered a server error"})
    }
})

// route for getting the uptime since the reccomendation has been given to the volunteer
router.get("/get-uptime/:uid",async(req,res) => {
    let current_time = new Date();
    try{
        const {createdAt} = await Reccomendation.findOne({UserId:req.params.uid},{_id:0,createdAt:1})
        total = current_time.getTime() - createdAt.getTime()
        const hours = (Math.floor((total)/1000))/3600;
        console.log(Math.round(hours));
        res.json({"message":"works"})
    }
    catch(err){
        console.log(err);
        res.status(500).json({"message":"encountered a server error"})
    }
})
// var messages={}
// io.on("connection",socket=>{
//     console.log(socket.id)
//     let room
//     socket.on("join-room",({adminID,userID},callback)=>{
//         room=adminID.toString()+"-"+userID.toString();
//         socket.join(room);
//         callback();
//     })
//     socket.on("message",({message,senderID})=>{
//         socket.broadcast.to(room).emit("message",message);
//         let messageObj={
//             message,
//             senderID,
//             time:new Date().getTime()
//         }
//         messages[room].push(messageObj)
//     })
    
// })
// router.get("/chat/:adminID/:volunteerID",(req,res)=>{
//     let adminID=req.params.adminID
//     let volunteerID=req.params.volunteerID
//     let room=adminID+"-"+volunteerID
//     let messagesForRoom=messages[room]
//     messagesForRoom.sort((x,y)=>{
//         return x.time - y.time;
//     })
//     return res.status(200).json({"message":messagesForRoom})
// })

module.exports =router

//
