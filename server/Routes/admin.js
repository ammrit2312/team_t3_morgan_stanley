const router = require('express').Router();
const Activity = require('../Model/Activity');
const Reccomendation = require('../Model/Reccomendation');
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
    const activities = await Activity.find({},{_id:1,ActivityName:1,Activity_Location:1,Language_Preference:1,Preffered_skills:1,Activity_availability:1});
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
        const activities = await Activity.find({},{_id:1,ActivityName:1,Activity_Location:1,Language_Preference:1,Preffered_skills:1});
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

router.put("/updateList/:id/:uid",async(req,res)=>{
    try{
    id=req.params.id 
    userID=req.params.uid
    const data =await Activity.updateOne({_id:id},{$push:{AssignedTo:userID},$inc:{Current_assigned : 1}});
    const status=await Reccomendation.updateMany({UserId:userID},{User_Activity_Select:true});
    res.status(200).json({"message":"Assigned successfully"});
    }
    catch(e)
    {
        console.log(e);
    }
})

// to update the array saying "I don't want to volunteer"
//get all the users who have not been assigned
//find user where highest score exists for this activity


module.exports =router

//
