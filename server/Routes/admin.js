const router = require('express').Router();
const Activity = require('../Model/Activity');
const Reccomendation = require('../Model/Reccomendation');
const Volunteers = require('../Model/Volunteers');
//route for admin to submit an activity
router.post("/submit-activity",async (req,res) => {
    try{
        const newActivity = new Activity(req.body);    
        const activity = await newActivity.save();
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
    }
})
// get all the recommended activities
router.get("/list-all-recommended-activities",async(req,res)=>{
    const activities=await Reccomendation.find({User_Activity_Select:false})
    res.status(200).json(activities);
});

// route to update the AssignedTo list
router.put("/updateList/:id/:uid",async(req,res)=>{
    try{
    id=req.params.id 
    userID=req.params.uid
    const data =await Activity.updateOne({_id:id},{$push:{AssignedTo:userID},$inc:{Current_assigned : 1}});
    const status=await Reccomendation.updateMany({UserId:userID},{User_Activity_Select:true});
    await Volunteers.updateOne({_id:userID},{assigned:true});
    res.status(200).json({"message":"Assigned successfully"});
    }
    catch(e)
    {
        console.log(e);
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
    }
})


//prefer
//timeout for volunteer to view 

// to update the array saying "I don't want to volunteer"
//get all the users who have not been assigned
//find user where highest score exists for this activity


module.exports =router

//
