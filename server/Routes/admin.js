const router = require('express').Router();
const Activity = require('../Model/Activity');
const Reccomendation = require('../Model/Reccomendation');

router.post("/submit-activity",async (req,res) => {
    try{
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
// get all the recommended activities
router.get("/list-all-recommended-activities",(req,res)=>{
    Reccomendation.find({},(err,activities)=>{
        res.json(activities);
    })
})

router.put("/updateList/:id/:uid",async(req,res)=>{
    try{
    id=req.params.id 
    userID=req.params.uid
    const data =await Activity.updateOne({_id:id},{$push:{AssignedTo:userID}});
    res.json(data);
    }
    catch(e)
    {
        console.log(e);
    }
})



module.exports =router
//module.exports=getAllActiv    ities
