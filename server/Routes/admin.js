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

// get all volunteers who have preferred activity given activity id
router.get("/list-all-users-for-activity/:activityid",async(req,res)=>{
    try{
        id=req.params.activityid
        list=[]
        if(id in Reccomendation.UserPreferred_Activity && User_Activity_Select===false){
            list.$push(UserId);
        }
        const return_user = await Promise.all(
            list.map((UserId) => {
                return Volunteers.findById(UserId,{_id:1,Volunteer_Name:1,Volunteer_Academic_Qualifications:1,Volunteer_Languages:1,Volunteer_Skills:1});
            }))
        res.status(200).json(return_user)
    }
    catch(e)
    {
        console.log(e);
        res.status(500).json({"message":"encountered a server error"});
    }

})

// route to assign volunteers to the activity
//updates AssignedTo list in Activity Schema by pushing userid
//updates User_Activity_Select indicating the user is selected
//updates Upcoming_Activities list for volunteer by pushing activity id
router.put("/updateList/:activityid/:uid",async(req,res)=>{
    try{
    id=req.params.activityid 
    userID=req.params.uid
    const data =await Activity.updateOne({_id:id},{$push:{AssignedTo:userID},$inc:{Current_assigned : 1}});
    const status=await Reccomendation.updateMany({UserId:userID},{User_Activity_Select:true});
    const update=await Volunteers.findOneAndUpdate({UserID:userID},{ $push : {"Upcoming_Activities": id }});
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
    const status= await Activity.findOneAndUpdate({_id:aid},{ $push : {"Activity_Attendance": uid}});
    await Reccomendation.updateOne({UserId:uid},{User_Activity_Select:true})
    res.status(200).json({"message":"Attendance updated successfully"});
    }
    catch(e)
    {
        console.log(e);
        res.status(500).json({"message":"encountered a server error"})
    }
})

//api to get basic information of volunteer 
router.get("/get-volunterer-basic-details",async(req,res) => {
    try{
        const basic_details = await Volunteers.find({},{_id:0,UserID:1,Volunteer_Name:1,Volunteer_email:1,Volunteer_Availability:1,Volunteer_Languages:1})
        res.status(200).json(basic_details);
    }
    catch(err){
        res.status(500).json({"message":"encountered a server error"});
    }
})

//api to get all information of the volunteer
router.get("/get-all-volunteer-info/:userID",async(req,res)=>{
    try
    {
        let userid=req.params.userID
        const all_detail = await Volunteers.findOne({UserID:userid},{_id:0,UserID:1,Volunteer_Name:1,Volunteer_Academic_Qualifications:1,Volunteer_Occupation:1,Volunteer_email:1,Volunteer_Number:1,Volunteer_Number_Of_Activities_Attended:1,Volunteer_Number_Of_Activities_Opted_Out:1,Volunteer_Skills:1,Volunteer_Languages:1})
        res.status(200).json(all_detail);
    }
    catch(e)
    {
        console.log(e)
        res.status(500).json({"message":"encountered a server error"});
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

// route for getting all the users mapped to a particular activity on the admnin side
router.get("/get-all-mapped-users/:activityid",async(req,res) => {
    try{
        const {Preferred_Users} = await Activity.findById(req.params.activityid,{_id:0,Preferred_Users:1});
        const user_details = await Promise.all(
            Preferred_Users.map((uid) => {
                return Volunteers.find({UserID:uid},{_id:0})
            })
        )
        res.status(200).json(user_details);
    }
    catch(err){
        res.status(500).json({"message":"encountered a server error"})
    }
    
})

//route for rejecting the volunteer from the admin side
router.put("/reject-volunteer/:activityid/:uid",async(req,res) => {
    try{
        await Activity.findByIdAndUpdate(req.params.activityid,{$pull:{Preferred_Users:req.params.uid}});
        await Reccomendation.findOneAndUpdate({"UserId":req.params.uid},{$pull:{UserPreferred_Activity:req.params.activityid}});
        res.status(200).json({"message":"rejected volunteer"})
    }
    catch(err){
        res.status(500).json({"message":"encountered a server error"});
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