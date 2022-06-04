const router = require('express').Router();
const Activity = require('../Model/Activity')

router.post("/submit-activity",async (req,res) => {
    try{

        const newActivity = new Activity(req.body);    
        const activtity = await newActivity.save();
        res.status(200).json(activtity);
    
    }
    catch(err){
        console.log(err);
    }
})


// function for getting the list of all activities (to be used for mapping)
// returns the object of all activities.
const getAllActivities = async () => {
    const activities = await Activity.find({},{_id:1,ActivityName:1,Activity_Location:1,Language_Preference:1,Preffered_skills:1,Activity_availability:1});
    return activities
}


// api to get list of all activities
router.get("/list-all-activities",async(req,res)=> {
    try{
        const activities = await Activity.find({},{_id:1,ActivityName:1,Activity_Location:1,Language_Preference:1,Preffered_skills:1});
        console.log(activities)
        res.status(200).json(activities);
    }
    catch(err){
        console.log(err)
    }
})

module.exports = router