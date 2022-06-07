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
    Reccomendation.find({User_Activity_Select:false},(err,activities)=>{
        res.json(activities);
    })
})

// route to update the AssignedTo list
router.put("/updateList/:id/:uid",async(req,res)=>{
    try{
    id=req.params.id 
    userID=req.params.uid
    const data =await Activity.updateOne({_id:id},{$push:{AssignedTo:userID},$inc:{Current_assigned : 1}});
    const status=await Reccomendation.updateMany({UserId:userID},{User_Activity_Select:true});
    res.json(status);
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

//Re=[]
//attendance
//chat 
//volunteer drops=> remove activity from assign => assign new volunteer
module.exports =router

//
