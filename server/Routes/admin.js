const router = require('express').Router();
const Activity = require('../Model/Activity');
const Reccomendation = require('../Model/Reccomendation');
const Volunteers = require('../Model/Volunteers');
const Volunteer_archives = require('../Model/Volunteer_archives');
const {getNewVolunteers}=require('../functions/getVolunteer');
const getBestActivitiesForUser=require('../functions/mapper');
const User = require('../Model/User');

//route for admin to submit an activity
var activitiesDict={}
router.post("/submit-activity",async (req,res) => {
    try{
        const newActivity = new Activity(req.body);    
        await newActivity.save();
        const unassignedUsers=await Volunteers.find({assigned:false})
        console.log(unassignedUsers);
        let volunteers=getNewVolunteers(activitiesDict,newActivity,unassignedUsers);
        console.log(volunteers);
        let volunteerIDs=await getUserIDs(volunteers)
        volunteerIDs.forEach((volunteer)=>{
        console.log(volunteer.UserID)
            
            addReccomendation(volunteer.UserID,newActivity)
        })
        res.status(200).json({"message":"successfully created activity"});
    
    }
    catch(err){
        console.log(err);
        res.status(500).json({"message":err});
    }
})

const getUserIDs=async(volunteers)=>{
    return await Promise.all(volunteers.map((volunteer)=>{
        return Volunteers.findOne({_id:volunteer})
        }));
}


const addReccomendation = async(volunteer,newActivity) => {
    const volunteerNeeded=await Volunteers.findOne({UserID:volunteer})
    volunteerNeeded.Volunteer_mapped+=1
    await volunteerNeeded.save();
    const volunteerName=volunteerNeeded.Volunteer_Name
    const ok = await Reccomendation.findOne({UserId:volunteer})
    const newRec = new Reccomendation({
        UserId:volunteer,
        Name:volunteerName,
        Reccomendation_ActivityID:newActivity._id.toString()
    })
    if(!ok)
    {
        await newRec.save();
        return ;
    }
    ok.Reccomendation_ActivityID.push(newActivity._id.toString())
    ok.User_Activity_Select=false;
    await ok.save();
}

const updateRecommendation=async(volunteer,newActivity)=>{
    await Reccomendation.updateOne({userId:volunteer},{$push:{Reccomendation_ActivityID:newActivity._id.toString()}})
}


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

// api to get list of all activities->1
router.get("/list-all-activities",async(req,res)=> {
    try{
        const activities = await Activity.find({isArchived:false},{_id:1,ActivityName:1,ActivityDate:1,Activity_Address:1,Activity_Mode:1,Activity_Description:1,ActivityTime:1,ActivityType:1,ActivityDurationInMinutes:1,Activity_Location:1,Language_Preference:1,Preffered_skills:1,Activity_availability:1});
        res.status(200).json(activities);
    }
    catch(err){
        console.log(err)
        res.status(500).json({"message":err})
    }
})

// api to get a single activity
router.get("/get-single-activity/:activityid",async(req,res) => {
    try {
        const signle_activity = await Activity.findById(req.params.activityid);
        res.status(200).json(signle_activity);
    } catch (err) {
        res.status(500).json({"message":"encounter a server error"});
    }
})


// api to delete volunteer
router.put("/list-delete-volunteer/:uid",async(req,res)=> {
    try{
        uid=req.params.uid
        const details = await Volunteers.findOne({UserID:uid});
        if(details.length == 0)
        {
           return  res.status(200).json({"message":"the user does not exist"})
        }
        const newArchive = new Volunteer_archives({
            UserID:details.UserID,
            Volunteer_Name:details.Volunteer_Name,
            Volunteer_Username:details.Volunteer_Username,
            Volunteer_Address:details.Volunteer_Address,
            Volunteer_College:details.Volunteer_College,
            Volunteer_Organization:details.Volunteer_Organization,
            Volunteer_Academic_Qualifications:details.Volunteer_Academic_Qualifications,
            Volunteer_Occupation:details.Volunteer_Occupation,
            Volunteer_email:details.Volunteer_email,
            Volunteer_Nationality:details.Volunteer_Nationality,
            Volunteer_Preferred_Mode:details.Volunteer_Preferred_Mode,
            Volunteer_Number:details.Volunteer_Number,
            Volunteer_Number_Of_Activities_Attended:details.Volunteer_Number_Of_Activities_Attended,
            Volunteer_Number_Of_Activities_Opted_Out:details.Volunteer_Number_Of_Activities_Opted_Out,
            Volunteer_Preferred_Locations:details.Volunteer_Preferred_Locations,
            Volunteer_Availability:details.Volunteer_Availability,
            Volunteer_Interested_Activity_Type:details.Volunteer_Interested_Activity_Type,
            Volunteer_Languages:details.Volunteer_Languages,
            Volunteer_Skills:details.Volunteer_Skills,
        });
        console.log(newArchive)
        await newArchive.save();
        await Volunteers.findOneAndDelete({UserID:uid});
        await Reccomendation.findOneAndDelete({UserId:uid})
        res.status(200).json({"message":"successfully deleted"});
    }
    catch(err){
        console.log(err)
        res.status(500).json({"message":"encounter a server error"})
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
    let id=req.params.activityid 
    let userID=req.params.uid
    let ok=await Activity.findOne({_id:id,$expr: { $lt: [ "$Current_assigned" , "$Max_volunteers" ] }})
    let ok1=await Volunteers.findOne({UserID:userID,assigned:false})
    if(ok && ok1)
    {
        const data =await Activity.updateOne({_id:id},{$addToSet:{AssignedTo:userID},$inc:{Current_assigned : 1},$pull:{Preferred_Users:userID}});
        const status=await Reccomendation.updateMany({UserId:userID},{User_Activity_Select:true});
        const update=await Volunteers.findOneAndUpdate({UserID:userID},{ $addToSet : {"Upcoming_Activities": id },assigned:true});
        res.status(200).json({"message":"Assigned successfully"});
    }
    else
    {
        res.status(500).json({"message":"activity filled up or user assigned to another activity"})
    }
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
router.get("/get-volunteer-basic-details",async(req,res) => {
    try{
        const basic_details = await Volunteers.find({},{_id:0,UserID:1,Volunteer_Name:1,Volunteer_Preferred_Mode:1,Volunteer_email:1,Volunteer_Availability:1,Volunteer_Languages:1})
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
        const all_detail = await Volunteers.findOne({UserID:userid},{_id:0,UserID:1,Volunteer_Name:1,Volunteer_Address:1,Volunteer_College:1,Volunteer_Organization:1,Volunteer_Academic_Qualifications:1,Volunteer_Occupation:1,Volunteer_Platform:1,Volunteer_email:1,Volunteer_Nationality:1,Volunteer_Number:1,Volunteer_Preferred_Mode:1,Volunteer_Preferred_Locations:1,Volunteer_Availability:1,Volunteer_Interested_Activity_Type:1,Volunteer_Number_Of_Activities_Attended:1,Volunteer_Number_Of_Activities_Opted_Out:1,Volunteer_Skills:1,Volunteer_Languages:1,assigned:1})
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
        let user_details = await Promise.all(
            Preferred_Users.map((uid) => {
                return Volunteers.findOne({UserID:uid,assigned:false},{_id:0})
            })
        )
        user_details =  user_details.filter(n => n)
        if(user_details.length === 0)
        {
            return res.status(200).json({"message":"no such users found the list is empty"})
        }
        res.status(200).json(user_details);
    }
    catch(err){
        console.log(err)
        res.status(500).json({"message":"encountered a server error"})
    }
    
})

// route for getting all the accepted users of a particular activity
router.get("/get-all-accepted-users/:activityid",async(req,res) => {
    try{
        const {AssignedTo} = await Activity.findById(req.params.activityid,{_id:0,AssignedTo:1});
        let user_details = await Promise.all(
            AssignedTo.map((uid) => {
                return Volunteers.findOne({UserID:uid},{_id:0})
            })
        )
        user_details =  user_details.filter(n => n)
        if(user_details.length === 0)
        {
            return res.status(200).json({"message":"no such users found the list is empty"})
        }
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



var userDict={};
var activityDict={};

// api for marking the activity as false
router.put('/mark-as-archive/:aid',async(req,res) => {
    try{
        await Activity.findByIdAndUpdate(req.params.aid,{$set:{isArchived:true}});
        const {AssignedTo} = await Activity.findById(req.params.aid,{_id:0,AssignedTo:1})
        AssignedTo.map(async (uid) => {

                await Reccomendation.findOneAndDelete({UserId:uid});

                await Volunteers.findOneAndUpdate({UserID:uid},{$set:{assigned:false,Upcoming_Activities:[]}});
                
                // rerun the mapping for those userids

        })
        // const volunteer = await Volunteers.find({assigned:false})
        AssignedTo.forEach(async (v) => {
            const volunteer = await Volunteers.findOne({UserID:v})
            Activity.find({ $expr: { $lt: [ "$Current_assigned" , "$Max_volunteers" ] },isArchived:false},async(err,activity)=>{
                if(!err && activity.length > 0)
                {
                console.log(volunteer);
                const bestActivitiesIDs=getBestActivitiesForUser(userDict,volunteer,activity);
                console.log(volunteer.Volunteer_Name,bestActivitiesIDs)
                volunteer.Volunteer_mapped+=bestActivitiesIDs.length
                addReccomendation_new(volunteer,bestActivitiesIDs);
                res.status(200).json({"message":"successfully mapped volunteer"});
                }
                else{
                    res.json({"message":"the activity max capacity is filled"})
                }
            })
        })
        res.status(200);
    }
    catch(err){
        console.log(err);
        res.status(500).json({"message":"encountered a server error"});
    }
})

// function to store the reccomendation in the database
const addReccomendation_new = async(volunteer,rec) => {
    const newRec = new Reccomendation({
            UserId:volunteer.UserID,
            Name:volunteer.Volunteer_Name,
            Reccomendation_ActivityID:rec
        })
        await newRec.save();
}
router.get("/list-all-upcoming-activities",async(req,res)=>{
    try{
        const activities=await Activity.find({ Current_assigned: { $gt: 0 },isArchived:false})
        res.status(200).json(activities)
    }
    catch(e)
    {
        console.log(e)
        res.json(500).json({"message":e})
    }

})

router.get("/get-archived-activities",async(req,res)=>{
    try{
        const archivedActivities=await Activity.find({isArchived:true},{_id:1,ActivityName:1,ActivityDate:1,ActivityDurationInMinutes:1,ActivityTime:1,Activity_Address:1,Activity_Description:1,Activity_Mode:1})
        res.status(200).json(archivedActivities)
    }
    catch(e)
    {
        res.status(500).json({"message":e})
    }
})

router.get("/get-admin-number",async(req,res)=>{
    try{
    const {Number}=await User.findOne({AccountType:1},{Number:1})
    res.status(200).json({"message":Number})
    }
    catch(e)
    {
        res.status(500).json({"message":e})
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