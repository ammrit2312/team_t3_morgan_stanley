const router = require('express').Router();
const Activity = require('../Model/Activity')

router.post("/submit-activity",async (req,res) => {
    try{
        console.log("hello")
        const newActivity = new Activity(req.body);    
        const activity = await newActivity.save();
        res.status(200).json(activity);
    
    }
    catch(err){
        console.log(err);
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

module.exports =router
//module.exports=getAllActivities
